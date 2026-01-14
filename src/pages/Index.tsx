import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TariffsSection from '@/components/TariffsSection';
import PromotionsSection from '@/components/PromotionsSection';

interface Tariff {
  name: string;
  speed: number;
  price: number;
  features: string[];
  popular?: boolean;
  type: 'internet' | 'combo';
  tvPackage?: string;
  tvChannels?: number;
}

interface TVPackage {
  name: string;
  channels: number;
  price: number;
  features: string[];
  hd: boolean;
  premium?: boolean;
}

interface Promotion {
  title: string;
  description: string;
  discount: string;
  validUntil: string;
  category: 'internet' | 'tv' | 'combo';
}

const Index = () => {
  const [activeTab, setActiveTab] = useState('internet');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const tariffs: Tariff[] = [
    {
      name: 'Базовый',
      speed: 100,
      price: 1000,
      type: 'internet',
      features: ['Технология GPON', 'Подключение 2-3 дня', 'Круглосуточная поддержка', 'Стабильная скорость'],
    },
    {
      name: 'Оптимальный',
      speed: 200,
      price: 1200,
      type: 'internet',
      features: ['Технология GPON', 'Подключение 2-3 дня', 'Круглосуточная поддержка', 'Приоритетный трафик'],
      popular: true,
    },
    {
      name: 'Максимум',
      speed: 500,
      price: 1500,
      type: 'internet',
      features: ['Технология GPON', 'Подключение 2-3 дня', 'Премиум поддержка 24/7', 'Безлимитный трафик'],
    },
    {
      name: 'Комбо 100',
      speed: 100,
      price: 1200,
      type: 'combo',
      tvPackage: 'Лайт+',
      tvChannels: 270,
      features: ['Интернет 100 Мбит/с', 'Пакет Лайт+', 'ТВ 270+ каналов', 'Технология GPON', 'Подключение 2-3 дня'],
    },
    {
      name: 'Комбо 200',
      speed: 200,
      price: 1200,
      type: 'combo',
      tvPackage: 'Лайт+',
      tvChannels: 270,
      features: ['Интернет 200 Мбит/с', 'Пакет Лайт+', 'ТВ 270+ каналов', 'Технология GPON', 'Подключение 2-3 дня'],
      popular: true,
    },
    {
      name: 'Комбо 200+',
      speed: 200,
      price: 1500,
      type: 'combo',
      tvPackage: 'Оптимум+',
      tvChannels: 400,
      features: ['Интернет 200 Мбит/с', 'Пакет Оптимум+', 'ТВ 400+ каналов', 'HD качество', 'Архив передач'],
    },
  ];

  const tvPackages: TVPackage[] = [
    {
      name: 'Премиум',
      channels: 420,
      price: 500,
      hd: true,
      features: ['420+ каналов', 'Все кино и сериалы', 'HD качество', 'Пауза и перемотка', 'Архив 7 дней'],
      premium: true,
    },
    {
      name: 'Всё включено',
      channels: 420,
      price: 800,
      hd: true,
      features: [
        '420+ каналов',
        'Все кинотеатры и кинопакеты',
        'Спортивные каналы Матч! Футбол и Матч! Премьер',
        'Пакет для Взрослых',
        'SHANT Premium',
        '4K качество',
        'Архив 14 дней',
      ],
      premium: true,
    },
  ];

  const promotions: Promotion[] = [
    {
      title: 'Новогодняя акция',
      description: 'Подключи интернет 500 Мбит/с и получи первый месяц бесплатно',
      discount: '-100%',
      validUntil: '31.01.2026',
      category: 'internet',
    },
    {
      title: 'ТВ в подарок',
      description: 'При подключении любого тарифа - пакет ТВ "Лайт+" на 3 месяца бесплатно',
      discount: 'Бесплатно 3 мес.',
      validUntil: '15.02.2026',
      category: 'combo',
    },
    {
      title: 'Спортивный пакет',
      description: 'Скидка 50% на спортивные каналы при подключении пакета "Премиум"',
      discount: '-50%',
      validUntil: '28.02.2026',
      category: 'tv',
    },
  ];

  const scrollToTariffs = () => {
    document.getElementById('tariffs')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onConnectClick={scrollToTariffs} />

      <HeroSection onConnectClick={scrollToTariffs} />

      <TariffsSection
        activeTab={activeTab}
        onTabChange={setActiveTab}
        tariffs={tariffs}
        tvPackages={tvPackages}
      />

      <PromotionsSection
        promotions={promotions}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">
                Готовы ответить на все ваши вопросы и помочь с подключением
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-card rounded-xl">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <a href="tel:+78001234567" className="text-primary hover:underline">
                      +7 (800) 123-45-67
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-card rounded-xl">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:info@vikomtel.ru" className="text-primary hover:underline">
                      info@vikomtel.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-card rounded-xl">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="card-3d animate-scale-in">
              <CardHeader>
                <CardTitle>Оставьте заявку</CardTitle>
                <CardDescription>Мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Телефон" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <Textarea placeholder="Ваш вопрос или комментарий" rows={4} />
                  </div>
                  <Button type="submit" className="w-full">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-muted/50 py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img 
                  src="https://cdn.poehali.dev/files/Дельфин копия1.png" 
                  alt="ООО Виком" 
                  className="h-12 w-auto object-contain"
                />
                <span className="text-xl font-bold gradient-text">ООО Виком</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Надежный интернет-провайдер с 2010 года
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#tariffs" className="hover:text-primary transition-colors">
                    Интернет
                  </a>
                </li>
                <li>
                  <a href="#tv" className="hover:text-primary transition-colors">
                    Телевидение
                  </a>
                </li>
                <li>
                  <a href="#promotions" className="hover:text-primary transition-colors">
                    Акции
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#contacts" className="hover:text-primary transition-colors">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="http://stat.vikomtel.ru" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    Личный кабинет
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Соцсети</h3>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="rounded-full">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2026 ООО Виком. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;