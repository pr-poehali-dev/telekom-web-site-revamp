import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

type TestState = 'idle' | 'testing-ping' | 'testing-download' | 'testing-upload' | 'done' | 'error';

interface SpeedResult {
  ping: number | null;
  download: number | null;
  upload: number | null;
}

const DOWNLOAD_URL = 'https://speed.cloudflare.com/__down?bytes=';
const UPLOAD_URL = 'https://speed.cloudflare.com/__up';

const SpeedTestSection = () => {
  const [state, setState] = useState<TestState>('idle');
  const [result, setResult] = useState<SpeedResult>({ ping: null, download: null, upload: null });
  const [liveSpeed, setLiveSpeed] = useState<number | null>(null);
  const stopped = useRef(false);

  const measurePing = (): Promise<number> => {
    return new Promise((resolve, reject) => {
      const times: number[] = [];
      let count = 0;
      const next = () => {
        if (stopped.current) return reject(new Error('stopped'));
        const xhr = new XMLHttpRequest();
        const start = performance.now();
        xhr.open('GET', `${DOWNLOAD_URL}1&_=${Date.now()}`, true);
        xhr.onload = () => {
          times.push(performance.now() - start);
          count++;
          if (count < 5) next();
          else {
            times.sort((a, b) => a - b);
            resolve(Math.round(times[1]));
          }
        };
        xhr.onerror = () => reject(new Error('ping failed'));
        xhr.send();
      };
      next();
    });
  };

  const measureDownload = (): Promise<number> => {
    return new Promise((resolve, reject) => {
      const bytes = 25 * 1024 * 1024;
      const xhr = new XMLHttpRequest();
      xhr.open('GET', `${DOWNLOAD_URL}${bytes}&_=${Date.now()}`, true);
      xhr.responseType = 'arraybuffer';

      let lastLoaded = 0;
      let lastTime = performance.now();
      const start = performance.now();

      xhr.onprogress = (e) => {
        if (stopped.current) { xhr.abort(); return; }
        const now = performance.now();
        const dt = (now - lastTime) / 1000;
        if (dt > 0.2) {
          const speedMbps = ((e.loaded - lastLoaded) * 8) / dt / 1_000_000;
          setLiveSpeed(Math.round(speedMbps));
          lastLoaded = e.loaded;
          lastTime = now;
        }
      };

      xhr.onload = () => {
        const elapsed = (performance.now() - start) / 1000;
        const mbps = (bytes * 8) / elapsed / 1_000_000;
        resolve(Math.round(mbps));
      };

      xhr.onerror = () => reject(new Error('download failed'));
      xhr.onabort = () => reject(new Error('stopped'));
      xhr.send();
    });
  };

  const measureUpload = (): Promise<number> => {
    return new Promise((resolve, reject) => {
      const bytes = 10 * 1024 * 1024;
      const data = new Uint8Array(bytes).fill(0x61);
      const xhr = new XMLHttpRequest();
      xhr.open('POST', `${UPLOAD_URL}?_=${Date.now()}`, true);

      let lastLoaded = 0;
      let lastTime = performance.now();
      const start = performance.now();

      xhr.upload.onprogress = (e) => {
        if (stopped.current) { xhr.abort(); return; }
        const now = performance.now();
        const dt = (now - lastTime) / 1000;
        if (dt > 0.2) {
          const speedMbps = ((e.loaded - lastLoaded) * 8) / dt / 1_000_000;
          setLiveSpeed(Math.round(speedMbps));
          lastLoaded = e.loaded;
          lastTime = now;
        }
      };

      xhr.onload = () => {
        const elapsed = (performance.now() - start) / 1000;
        const mbps = (bytes * 8) / elapsed / 1_000_000;
        resolve(Math.round(mbps));
      };

      xhr.onerror = () => reject(new Error('upload failed'));
      xhr.onabort = () => reject(new Error('stopped'));
      xhr.send(data);
    });
  };

  const runTest = async () => {
    stopped.current = false;
    setResult({ ping: null, download: null, upload: null });
    setLiveSpeed(null);

    try {
      setState('testing-ping');
      const ping = await measurePing();
      if (stopped.current) return;
      setResult(r => ({ ...r, ping }));

      setState('testing-download');
      setLiveSpeed(null);
      const download = await measureDownload();
      if (stopped.current) return;
      setResult(r => ({ ...r, download }));
      setLiveSpeed(null);

      setState('testing-upload');
      const upload = await measureUpload();
      if (stopped.current) return;
      setResult(r => ({ ...r, upload }));
      setLiveSpeed(null);

      setState('done');
    } catch (e) {
      if ((e as Error).message !== 'stopped') {
        setState('error');
      }
    }
  };

  const reset = () => {
    stopped.current = true;
    setState('idle');
    setResult({ ping: null, download: null, upload: null });
    setLiveSpeed(null);
  };

  const isTesting = state === 'testing-ping' || state === 'testing-download' || state === 'testing-upload';

  const getLabel = () => {
    if (state === 'testing-ping') return 'Измеряем задержку...';
    if (state === 'testing-download') return 'Измеряем скорость загрузки...';
    if (state === 'testing-upload') return 'Измеряем скорость отдачи...';
    return '';
  };

  const getSpeedColor = (mbps: number | null, type: 'download' | 'upload') => {
    if (mbps === null) return 'text-muted-foreground';
    const threshold = type === 'download' ? [10, 50] : [5, 20];
    if (mbps < threshold[0]) return 'text-red-400';
    if (mbps < threshold[1]) return 'text-yellow-400';
    return 'text-green-400';
  };

  const getPingColor = (ms: number | null) => {
    if (ms === null) return 'text-muted-foreground';
    if (ms < 30) return 'text-green-400';
    if (ms < 80) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <section id="speedtest" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Измерение скорости</h2>
          <p className="text-xl text-muted-foreground">Проверьте скорость вашего интернет-соединения прямо сейчас</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="card-3d overflow-hidden">
            <CardContent className="p-8">
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className={`text-3xl md:text-4xl font-bold mb-1 transition-all duration-300 ${getPingColor(result.ping)}`}>
                    {result.ping !== null ? result.ping : '—'}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">мс</div>
                  <div className="flex items-center justify-center gap-1 mt-2 text-sm text-muted-foreground">
                    <Icon name="Activity" size={14} />
                    Пинг
                  </div>
                </div>

                <div className="text-center">
                  <div className={`text-3xl md:text-4xl font-bold mb-1 transition-all duration-300 ${getSpeedColor(result.download, 'download')}`}>
                    {state === 'testing-download' && liveSpeed !== null
                      ? liveSpeed
                      : result.download !== null
                      ? result.download
                      : '—'}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Мбит/с</div>
                  <div className="flex items-center justify-center gap-1 mt-2 text-sm text-muted-foreground">
                    <Icon name="Download" size={14} />
                    Загрузка
                  </div>
                </div>

                <div className="text-center">
                  <div className={`text-3xl md:text-4xl font-bold mb-1 transition-all duration-300 ${getSpeedColor(result.upload, 'upload')}`}>
                    {state === 'testing-upload' && liveSpeed !== null
                      ? liveSpeed
                      : result.upload !== null
                      ? result.upload
                      : '—'}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Мбит/с</div>
                  <div className="flex items-center justify-center gap-1 mt-2 text-sm text-muted-foreground">
                    <Icon name="Upload" size={14} />
                    Отдача
                  </div>
                </div>
              </div>

              {isTesting && (
                <div className="mb-6 text-center">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    {getLabel()}
                  </div>
                </div>
              )}

              {state === 'error' && (
                <div className="mb-6 text-center text-sm text-red-400">
                  Не удалось выполнить тест. Проверьте подключение и попробуйте снова.
                </div>
              )}

              <div className="text-center">
                {state === 'idle' && (
                  <Button size="lg" className="px-12 animate-glow" onClick={runTest}>
                    <Icon name="Zap" size={18} className="mr-2" />
                    Начать тест
                  </Button>
                )}
                {isTesting && (
                  <Button size="lg" variant="outline" onClick={reset}>
                    Остановить
                  </Button>
                )}
                {(state === 'done' || state === 'error') && (
                  <div className="space-y-4">
                    <Button size="lg" className="px-12" onClick={runTest}>
                      <Icon name="RefreshCw" size={18} className="mr-2" />
                      Повторить тест
                    </Button>
                    {result.download !== null && result.download < 50 && (
                      <div className="text-sm text-muted-foreground">
                        Скорость ниже оптимальной?{' '}
                        <button
                          className="text-primary underline underline-offset-4 cursor-pointer"
                          onClick={() => document.getElementById('tariffs')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                          Посмотрите наши тарифы
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SpeedTestSection;
