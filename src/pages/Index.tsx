import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TariffsSection from '@/components/TariffsSection';
import ServicesSection from '@/components/ServicesSection';

interface Tariff {
  name: string;
  speed: number;
  price: number;
  features: string[];
  popular?: boolean;
  type: 'internet' | 'combo';
  tvPackage?: string;
  tvChannels?: number;
  image?: string;
}

interface TVPackage {
  name: string;
  channels: number;
  price: number;
  features: string[];
  hd: boolean;
  premium?: boolean;
  image?: string;
}

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://functions.poehali.dev/38253b90-960e-4b29-93c5-8b351f9362d2', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const tariffs: Tariff[] = [
    {
      name: 'Комбо 100 МКД',
      speed: 100,
      price: 1000,
      type: 'combo',
      tvPackage: 'Лайт+',
      tvChannels: 270,
      features: ['Интернет 100 Мбит/с', 'Пакет Лайт+', 'ТВ 270+ каналов', 'Технология FTTH', 'Только для многоквартирных домов', 'Подключение 2-3 дня'],
      image: 'https://cdn.poehali.dev/projects/f6041f0d-fd3f-4598-bbd4-c8c4e40663cb/files/b13386df-8df3-4d2a-a2df-0061288b3cc7.jpg',
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
      image: 'https://cdn.poehali.dev/projects/f6041f0d-fd3f-4598-bbd4-c8c4e40663cb/files/98447bc9-feec-481c-8e73-916fe25824b9.jpg',
    },
    {
      name: 'Комбо 200+',
      speed: 200,
      price: 1500,
      type: 'combo',
      tvPackage: 'Оптимум+',
      tvChannels: 400,
      features: ['Интернет 200 Мбит/с', 'Пакет Оптимум+', 'ТВ 400+ каналов', 'HD качество', 'Архив передач'],
      image: 'https://cdn.poehali.dev/projects/f6041f0d-fd3f-4598-bbd4-c8c4e40663cb/files/4cc2f265-0f86-455d-9941-171a97aeb82c.jpg',
    },
  ];

  const tvPackages: TVPackage[] = [
    {
      name: 'Премиум',
      channels: 420,
      price: 999,
      hd: true,
      features: ['420+ каналов', 'Все кино и сериалы', 'HD качество', 'Пауза и перемотка', 'Архив 7 дней'],
      premium: true,
      image: 'https://cdn.poehali.dev/projects/f6041f0d-fd3f-4598-bbd4-c8c4e40663cb/files/c5aaa5ab-ddf6-4281-a8a9-9639a45421b1.jpg',
    },
    {
      name: 'Всё включено',
      channels: 420,
      price: 1800,
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
      image: 'https://cdn.poehali.dev/projects/f6041f0d-fd3f-4598-bbd4-c8c4e40663cb/files/c5aaa5ab-ddf6-4281-a8a9-9639a45421b1.jpg',
    },
    {
      name: 'НАСТРОЙ КИНО!',
      channels: 0,
      price: 320,
      hd: true,
      features: [
        'Фильмы всех жанров и стилей',
        'Новинки кинопроката',
        'Классика кинематографа',
        'HD качество',
      ],
      image: 'https://cdn.poehali.dev/projects/f6041f0d-fd3f-4598-bbd4-c8c4e40663cb/files/ee52f4df-27ee-4d04-9c8b-6ecf62ba5f8c.jpg',
    },
    {
      name: 'МАТЧ! ФУТБОЛ',
      channels: 0,
      price: 380,
      hd: true,
      features: [
        'Футбольные премиальные каналы',
        'Трансляции главных европейских лиг',
        'Прямые эфиры матчей',
        'Аналитические программы',
      ],
      image: 'https://cdn.poehali.dev/projects/f6041f0d-fd3f-4598-bbd4-c8c4e40663cb/files/2fc25c2a-00d1-4afe-affa-68e3ce931b91.jpg',
    },
    {
      name: 'МАТЧ ПРЕМЬЕР',
      channels: 0,
      price: 299,
      hd: true,
      features: [
        'Топовый футбольный канал',
        'Премьеры программ',
        'Повторы эфира Матч ТВ',
        'Эксклюзивный контент',
      ],
      image: 'https://cdn.poehali.dev/projects/f6041f0d-fd3f-4598-bbd4-c8c4e40663cb/files/2fc25c2a-00d1-4afe-affa-68e3ce931b91.jpg',
    },
    {
      name: 'Много кино',
      channels: 0,
      price: 199,
      hd: true,
      features: [
        'Киноканалы в HD качестве',
        'Зарубежные и российские блокбастеры',
        'Романтические комедии',
        'Тематические киноподборки',
        'Семейное кино',
      ],
      image: 'https://cdn.poehali.dev/projects/f6041f0d-fd3f-4598-bbd4-c8c4e40663cb/files/ee52f4df-27ee-4d04-9c8b-6ecf62ba5f8c.jpg',
    },
    {
      name: 'Кинотеатр START',
      channels: 0,
      price: 499,
      hd: true,
      features: [
        'Сериалы со всего мира',
        'Собственные оригинальные проекты',
        'Премьеры комедий до эфира на ТВ',
        'Эксклюзивный контент',
      ],
      image: 'https://cdn.poehali.dev/projects/f6041f0d-fd3f-4598-bbd4-c8c4e40663cb/files/ee52f4df-27ee-4d04-9c8b-6ecf62ba5f8c.jpg',
    },
    {
      name: 'Кинотеатр AMEDIATEKA',
      channels: 0,
      price: 349,
      hd: true,
      features: [
        'Лучшие сериалы планеты по версии IMDb',
        'Новинки и хиты от HBO, Showtime, CBS, Sky',
        'Оригинальные проекты',
        'Субтитры и дубляж',
      ],
      image: 'https://cdn.poehali.dev/projects/f6041f0d-fd3f-4598-bbd4-c8c4e40663cb/files/ee52f4df-27ee-4d04-9c8b-6ecf62ba5f8c.jpg',
    },
  ];

  const services: Service[] = [
    {
      title: 'Техническая поддержка 24/7',
      description: 'Круглосуточная помощь нашим клиентам',
      icon: 'Headphones',
      features: [
        'Консультации по подключению',
        'Решение технических проблем',
        'Настройка оборудования',
        'Удаленная диагностика'
      ],
    },
    {
      title: 'Настройка оборудования',
      description: 'Профессиональная установка и настройка',
      icon: 'Settings',
      features: [
        'Установка роутеров',
        'Настройка Wi-Fi сети',
        'Подключение ТВ-приставок',
        'Оптимизация сигнала'
      ],
    },
    {
      title: 'Личный кабинет',
      description: 'Управление услугами онлайн',
      icon: 'User',
      features: [
        'Пополнение баланса',
        'Смена тарифа',
        'История платежей',
        'Статистика использования'
      ],
    },
    {
      title: 'Видеонаблюдение',
      description: 'Безопасность вашего дома',
      icon: 'Video',
      features: [
        'Установка камер',
        'Облачное хранилище',
        'Просмотр с телефона',
        'Архив записей до 30 дней'
      ],
    },
    {
      title: 'Защита от киберугроз',
      description: 'Безопасность в интернете',
      icon: 'Shield',
      features: [
        'Антивирусная защита',
        'Родительский контроль',
        'Блокировка рекламы',
        'Безопасный DNS'
      ],
    },
    {
      title: 'Подключение организаций',
      description: 'Решения для бизнеса',
      icon: 'Building',
      features: [
        'Выделенные каналы',
        'Статический IP-адрес',
        'VPN для сотрудников',
        'Приоритетная поддержка'
      ],
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
        tariffs={tariffs}
        tvPackages={tvPackages}
      />

      <ServicesSection services={services} />

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
                    <a href="tel:+79135474823" className="text-primary hover:underline block">
                      +7 (913) 547-48-23
                    </a>
                    <a href="tel:83904430434" className="text-primary hover:underline block">
                      8 (39044) 3-04-34
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-card rounded-xl">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:office@vikomtel.ru" className="text-primary hover:underline">
                      office@vikomtel.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-card rounded-xl">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-muted-foreground">655770, Республика Хакасия, Бейский район, с. Бея, ул. Горького, 1Б</div>
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
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Телефон" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Ваш вопрос или комментарий" 
                      rows={4} 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>
                  {submitStatus === 'success' && (
                    <div className="text-green-500 text-sm text-center">
                      ✓ Заявка успешно отправлена!
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="text-red-500 text-sm text-center">
                      ✗ Ошибка отправки. Попробуйте позже.
                    </div>
                  )}
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
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
                  <a href="#services" className="hover:text-primary transition-colors">
                    Сервисы
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