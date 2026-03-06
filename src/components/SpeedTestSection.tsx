import { Card, CardContent } from '@/components/ui/card';

const SpeedTestSection = () => {
  return (
    <section id="speedtest" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Измерение скорости</h2>
          <p className="text-xl text-muted-foreground">Проверьте скорость вашего интернет-соединения прямо сейчас</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="card-3d overflow-hidden">
            <CardContent className="p-0">
              <iframe
                src="https://openspeedtest.com/Get-widget.php"
                title="Тест скорости интернета"
                width="100%"
                height="500"
                frameBorder="0"
                scrolling="no"
                style={{ display: 'block', borderRadius: 'var(--radius)' }}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SpeedTestSection;
