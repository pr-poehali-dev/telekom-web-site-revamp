import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const SpeedTestSection = () => {
  return (
    <section id="speedtest" className="py-20 px-4">
      <div className="container mx-auto text-center animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Измерение скорости</h2>
        <p className="text-xl text-muted-foreground mb-8">Проверьте скорость вашего интернет-соединения прямо сейчас</p>
        <a href="https://www.nperf.com/ru/" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="px-12 animate-glow">
            <Icon name="Zap" size={18} className="mr-2" />
            Измерить скорость
          </Button>
        </a>
      </div>
    </section>
  );
};

export default SpeedTestSection;
