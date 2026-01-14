import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

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
      name: 'Старт+',
      speed: 100,
      price: 1350,
      type: 'combo',
      tvPackage: 'Лайт+',
      tvChannels: 270,
      features: ['Интернет 100 Мбит/с', 'ТВ 270+ каналов', 'Технология GPON', 'Подключение 2-3 дня'],
    },
    {
      name: 'Всё включено',
      speed: 200,
      price: 1800,
      type: 'combo',
      tvPackage: 'Оптимум+',
      tvChannels: 400,
      features: ['Интернет 200 Мбит/с', 'ТВ 400+ каналов', 'HD качество', 'Архив передач'],
      popular: true,
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

  const filteredPromotions = selectedCategory === 'all' 
    ? promotions 
    : promotions.filter(p => p.category === selectedCategory);

  const scrollToTariffs = () => {
    document.getElementById('tariffs')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-yellow-500 rounded-lg flex items-center justify-center">
                <Icon name="Wifi" className="text-background" size={24} />
              </div>
              <span className="text-2xl font-bold gradient-text">VikomTel</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#tariffs" className="text-foreground/80 hover:text-primary transition-colors">
                Тарифы
              </a>
              <a href="#tv" className="text-foreground/80 hover:text-primary transition-colors">
                Телевидение
              </a>
              <a href="#promotions" className="text-foreground/80 hover:text-primary transition-colors">
                Акции
              </a>
              <a href="#contacts" className="text-foreground/80 hover:text-primary transition-colors">
                Контакты
              </a>
              <a
                href="http://stat.vikomtel.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                Личный кабинет
              </a>
            </div>
            <Button onClick={scrollToTariffs} className="glow-effect">
              Подключить
            </Button>
          </div>
        </div>
      </nav>

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
                <Button size="lg" onClick={scrollToTariffs} className="text-lg glow-effect">
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
                  <div className="text-3xl font-bold text-primary">15k+</div>
                  <div className="text-sm text-muted-foreground">Клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 blur-3xl rounded-full"></div>
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 card-3d">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-xl">
                    <Icon name="Rocket" className="text-primary" size={32} />
                    <div>
                      <div className="font-semibold">Быстрое подключение</div>
                      <div className="text-sm text-muted-foreground">Всего 2-3 рабочих дня</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-secondary/10 rounded-xl">
                    <Icon name="Shield" className="text-secondary" size={32} />
                    <div>
                      <div className="font-semibold">Надежная защита</div>
                      <div className="text-sm text-muted-foreground">Технология GPON</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-xl">
                    <Icon name="Headphones" className="text-primary" size={32} />
                    <div>
                      <div className="font-semibold">Поддержка 24/7</div>
                      <div className="text-sm text-muted-foreground">Всегда на связи</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tariffs" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Тарифные планы</h2>
            <p className="text-xl text-muted-foreground">Выберите оптимальный тариф для себя</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="internet">Интернет</TabsTrigger>
              <TabsTrigger value="combo">Интернет + ТВ</TabsTrigger>
            </TabsList>

            <TabsContent value="internet" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tariffs
                  .filter((t) => t.type === 'internet')
                  .map((tariff, index) => (
                    <Card
                      key={tariff.name}
                      className={`relative card-3d animate-slide-up ${
                        tariff.popular ? 'border-primary glow-effect' : ''
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {tariff.popular && (
                        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-background">
                          Популярный
                        </Badge>
                      )}
                      <CardHeader>
                        <CardTitle className="text-2xl">{tariff.name}</CardTitle>
                        <CardDescription>Скорость до {tariff.speed} Мбит/с</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <span className="text-5xl font-bold gradient-text">{tariff.price}</span>
                          <span className="text-muted-foreground ml-2">₽/мес</span>
                        </div>
                        <ul className="space-y-2">
                          {tariff.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2">
                              <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" variant={tariff.popular ? 'default' : 'outline'}>
                          Выбрать тариф
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="combo" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {tariffs
                  .filter((t) => t.type === 'combo')
                  .map((tariff, index) => (
                    <Card
                      key={tariff.name}
                      className={`relative card-3d animate-slide-up ${
                        tariff.popular ? 'border-primary glow-effect' : ''
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {tariff.popular && (
                        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-background">
                          Популярный
                        </Badge>
                      )}
                      <CardHeader>
                        <CardTitle className="text-2xl">{tariff.name}</CardTitle>
                        <CardDescription>
                          {tariff.speed} Мбит/с + {tariff.tvPackage}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <span className="text-5xl font-bold gradient-text">{tariff.price}</span>
                          <span className="text-muted-foreground ml-2">₽/мес</span>
                        </div>
                        <div className="flex items-center gap-2 p-3 bg-secondary/10 rounded-lg">
                          <Icon name="Tv" className="text-secondary" size={24} />
                          <span className="font-semibold">{tariff.tvChannels}+ каналов</span>
                        </div>
                        <ul className="space-y-2">
                          {tariff.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2">
                              <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" variant={tariff.popular ? 'default' : 'outline'}>
                          Выбрать тариф
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="tv" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">ТВ-пакеты</h2>
            <p className="text-xl text-muted-foreground">Премиальное телевидение для всей семьи</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {tvPackages.map((pkg, index) => (
              <Card
                key={pkg.name}
                className={`card-3d animate-slide-up ${pkg.premium ? 'border-secondary glow-effect' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    {pkg.hd && (
                      <Badge variant="secondary" className="ml-2">
                        HD/4K
                      </Badge>
                    )}
                  </div>
                  <CardDescription>{pkg.channels}+ каналов</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="text-5xl font-bold gradient-text">{pkg.price}</span>
                    <span className="text-muted-foreground ml-2">₽/мес</span>
                  </div>
                  <ul className="space-y-2">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={pkg.premium ? 'default' : 'outline'}>
                    Подключить пакет
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="promotions" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Акции и спецпредложения</h2>
            <p className="text-xl text-muted-foreground">Выгодные предложения для вас</p>
          </div>

          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
            >
              Все акции
            </Button>
            <Button
              variant={selectedCategory === 'internet' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('internet')}
            >
              Интернет
            </Button>
            <Button
              variant={selectedCategory === 'tv' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('tv')}
            >
              ТВ
            </Button>
            <Button
              variant={selectedCategory === 'combo' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('combo')}
            >
              Комбо
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPromotions.map((promo, index) => (
              <Card key={promo.title} className="card-3d animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-xl">{promo.title}</CardTitle>
                    <Badge className="bg-destructive text-white shrink-0">{promo.discount}</Badge>
                  </div>
                  <CardDescription>{promo.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">До {promo.validUntil}</span>
                  <Button size="sm">Подробнее</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-yellow-500 rounded-lg flex items-center justify-center">
                  <Icon name="Wifi" className="text-background" size={24} />
                </div>
                <span className="text-xl font-bold gradient-text">VikomTel</span>
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
            © 2026 VikomTel. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
