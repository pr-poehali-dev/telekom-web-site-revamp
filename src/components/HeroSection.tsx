import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onConnectClick: () => void;
}

const HeroSection = ({ onConnectClick }: HeroSectionProps) => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <Badge className="bg-primary/20 text-primary border-primary">Лучший выбор 2026</Badge>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Высокая скорость.
              <br />
              <span className="gradient-text">Доступные цены.</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Надежное подключение к интернету на базе технологии GPON. Подключаем за 2-3 рабочих дня.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={onConnectClick} className="text-lg glow-effect">
                <Icon name="Zap" className="mr-2" size={20} />
                Выбрать тариф
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="PhoneCall" className="mr-2" size={20} />
                Узнать подробнее
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Аптайм</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Поддержка</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Клиентов</div>
              </div>
            </div>
          </div>
          <div className="relative animate-scale-in flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 blur-3xl rounded-full"></div>
            <img 
              src="https://cdn.poehali.dev/files/Дельфин копия1.png" 
              alt="Виком - Высокоскоростной интернет" 
              className="relative w-full max-w-lg h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;