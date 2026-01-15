export interface Tariff {
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

export interface TVPackage {
  name: string;
  channels: number;
  price: number;
  features: string[];
  hd: boolean;
  premium?: boolean;
  image?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
  image?: string;
}

export const tariffs: Tariff[] = [
  {
    name: 'Комбо 100 МКД',
    speed: 100,
    price: 1000,
    type: 'combo',
    tvPackage: 'Лайт+',
    tvChannels: 270,
    features: ['Интернет 100 Мбит/с', 'Пакет Лайт+', 'ТВ 270+ каналов', 'Технология FTTH', 'Только для многоквартирных домов', 'Подключение 2-3 дня'],
    image: 'https://cdn.poehali.dev/files/Поезд.jpg',
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
    image: 'https://cdn.poehali.dev/files/Самолет.jpg',
  },
  {
    name: 'Комбо 200+',
    speed: 200,
    price: 1500,
    type: 'combo',
    tvPackage: 'Оптимум+',
    tvChannels: 400,
    features: ['Интернет 200 Мбит/с', 'Пакет Оптимум+', 'ТВ 400+ каналов', 'HD качество', 'Архив передач'],
    image: 'https://cdn.poehali.dev/files/Ракета.jpg',
  },
];

export const tvPackages: TVPackage[] = [
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
    image: 'https://cdn.poehali.dev/files/настрой кино.png',
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
    image: 'https://cdn.poehali.dev/files/Футбол.jpeg',
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
    image: 'https://cdn.poehali.dev/files/Матч примьер.jpg',
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
    image: 'https://cdn.poehali.dev/files/Много кино new.png',
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
    image: 'https://cdn.poehali.dev/files/START.png',
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
    image: 'https://cdn.poehali.dev/files/Амедиатека.png',
  },
];

export const services: Service[] = [
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
    image: 'https://cdn.poehali.dev/projects/f6041f0d-fd3f-4598-bbd4-c8c4e40663cb/files/462a859a-be05-4597-a293-0f8aa748c4b2.jpg',
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
    image: 'https://cdn.poehali.dev/projects/f6041f0d-fd3f-4598-bbd4-c8c4e40663cb/files/49c12df7-2c55-4a83-9626-0f22a40cbddd.jpg',
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
    image: 'https://cdn.poehali.dev/projects/f6041f0d-fd3f-4598-bbd4-c8c4e40663cb/files/d1655b5a-e05b-459c-9c2a-817ea787bd55.jpg',
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
    image: 'https://cdn.poehali.dev/projects/f6041f0d-fd3f-4598-bbd4-c8c4e40663cb/files/ccbe3c47-dfe7-4fe0-8fb6-534f7e3fa2cd.jpg',
  },
  {
    title: 'Обещанный платёж',
    description: 'Продление услуг при нулевом балансе',
    icon: 'CreditCard',
    features: [
      'Продление действия уже подключённых услуг при нулевом балансе',
      'Задолженность должна быть погашена в течение следующих 3 дней',
      'Активация через личный кабинет',
      'Доступно для всех тарифов'
    ],
    image: 'https://cdn.poehali.dev/projects/f6041f0d-fd3f-4598-bbd4-c8c4e40663cb/files/5abd0824-bfd3-4d32-8db0-1fa7e90b72fc.jpg',
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
    image: 'https://cdn.poehali.dev/projects/f6041f0d-fd3f-4598-bbd4-c8c4e40663cb/files/a6bad533-88b5-45fa-a7c8-a02216af2680.jpg',
  },
];