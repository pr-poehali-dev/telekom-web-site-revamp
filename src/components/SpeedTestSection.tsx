import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

type TestState = 'idle' | 'testing-ping' | 'testing-download' | 'testing-upload' | 'done';

interface SpeedResult {
  ping: number | null;
  download: number | null;
  upload: number | null;
}

const SpeedTestSection = () => {
  const [state, setState] = useState<TestState>('idle');
  const [result, setResult] = useState<SpeedResult>({ ping: null, download: null, upload: null });
  const [progress, setProgress] = useState(0);
  const abortRef = useRef<AbortController | null>(null);

  const measurePing = async (): Promise<number> => {
    const times: number[] = [];
    for (let i = 0; i < 5; i++) {
      const start = performance.now();
      await fetch(`https://www.cloudflare.com/cdn-cgi/trace?_=${Date.now() + i}`, { mode: 'no-cors', cache: 'no-store' });
      times.push(performance.now() - start);
    }
    times.sort((a, b) => a - b);
    return Math.round(times[1]);
  };

  const measureDownload = async (signal: AbortSignal): Promise<number> => {
    const sizes = [1, 2, 5, 10];
    let totalBits = 0;
    let totalTime = 0;

    for (let i = 0; i < sizes.length; i++) {
      const url = `https://speed.cloudflare.com/__down?bytes=${sizes[i] * 1024 * 1024}&_=${Date.now()}`;
      const start = performance.now();
      const res = await fetch(url, { signal, cache: 'no-store' });
      const blob = await res.blob();
      const elapsed = (performance.now() - start) / 1000;
      totalBits += blob.size * 8;
      totalTime += elapsed;
      setProgress(25 + Math.round((i + 1) / sizes.length * 35));
    }

    return Math.round((totalBits / totalTime) / 1_000_000);
  };

  const measureUpload = async (signal: AbortSignal): Promise<number> => {
    const sizes = [1, 2, 5];
    let totalBits = 0;
    let totalTime = 0;

    for (let i = 0; i < sizes.length; i++) {
      const data = new Uint8Array(sizes[i] * 1024 * 1024).fill(0x61);
      const start = performance.now();
      await fetch(`https://speed.cloudflare.com/__up?_=${Date.now()}`, {
        method: 'POST',
        body: data,
        signal,
        cache: 'no-store',
      });
      const elapsed = (performance.now() - start) / 1000;
      totalBits += data.byteLength * 8;
      totalTime += elapsed;
      setProgress(60 + Math.round((i + 1) / sizes.length * 35));
    }

    return Math.round((totalBits / totalTime) / 1_000_000);
  };

  const runTest = async () => {
    const abort = new AbortController();
    abortRef.current = abort;
    setResult({ ping: null, download: null, upload: null });
    setProgress(0);

    try {
      setState('testing-ping');
      setProgress(5);
      const ping = await measurePing();
      setResult(r => ({ ...r, ping }));
      setProgress(20);

      setState('testing-download');
      const download = await measureDownload(abort.signal);
      setResult(r => ({ ...r, download }));

      setState('testing-upload');
      setProgress(60);
      const upload = await measureUpload(abort.signal);
      setResult(r => ({ ...r, upload }));

      setProgress(100);
      setState('done');
    } catch (e) {
      if ((e as Error).name !== 'AbortError') {
        setState('done');
      }
    }
  };

  const reset = () => {
    abortRef.current?.abort();
    setState('idle');
    setResult({ ping: null, download: null, upload: null });
    setProgress(0);
  };

  const isTesting = state !== 'idle' && state !== 'done';

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
              {/* Метрики */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className={`text-3xl md:text-4xl font-bold mb-1 ${getPingColor(result.ping)}`}>
                    {result.ping !== null ? result.ping : '—'}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">мс</div>
                  <div className="flex items-center justify-center gap-1 mt-2 text-sm text-muted-foreground">
                    <Icon name="Activity" size={14} />
                    Пинг
                  </div>
                </div>

                <div className="text-center">
                  <div className={`text-3xl md:text-4xl font-bold mb-1 ${getSpeedColor(result.download, 'download')}`}>
                    {result.download !== null ? result.download : '—'}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Мбит/с</div>
                  <div className="flex items-center justify-center gap-1 mt-2 text-sm text-muted-foreground">
                    <Icon name="Download" size={14} />
                    Загрузка
                  </div>
                </div>

                <div className="text-center">
                  <div className={`text-3xl md:text-4xl font-bold mb-1 ${getSpeedColor(result.upload, 'upload')}`}>
                    {result.upload !== null ? result.upload : '—'}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Мбит/с</div>
                  <div className="flex items-center justify-center gap-1 mt-2 text-sm text-muted-foreground">
                    <Icon name="Upload" size={14} />
                    Отдача
                  </div>
                </div>
              </div>

              {/* Прогресс-бар */}
              {isTesting && (
                <div className="mb-6">
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span>{getLabel()}</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Кнопка */}
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
                {state === 'done' && (
                  <div className="space-y-4">
                    <Button size="lg" className="px-12" onClick={runTest}>
                      <Icon name="RefreshCw" size={18} className="mr-2" />
                      Повторить тест
                    </Button>
                    {result.download !== null && result.download < 50 && (
                      <p className="text-sm text-muted-foreground">
                        Скорость ниже оптимальной? <a href="#tariffs" className="text-primary underline underline-offset-4 cursor-pointer" onClick={e => { e.preventDefault(); document.getElementById('tariffs')?.scrollIntoView({ behavior: 'smooth' }); }}>Посмотрите наши тарифы</a>
                      </p>
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
