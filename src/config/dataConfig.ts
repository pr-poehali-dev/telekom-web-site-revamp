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
    image: 'https://cdn.poehali.dev/files/Много кино.png',
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