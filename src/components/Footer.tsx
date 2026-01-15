import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-muted/30 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/projects/f6041f0d-fd3f-4598-bbd4-c8c4e40663cb/files/6a3bb604-8d37-440f-966d-a41a3faa4eee.png" 
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
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <a href="tel:+79135474823" className="hover:text-primary transition-colors">
                  +7 (913) 547-48-23
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <a href="mailto:office@vikomtel.ru" className="hover:text-primary transition-colors">
                  office@vikomtel.ru
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>655770, Республика Хакасия, с. Бея, ул.Горького,1Б</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Социальные сети</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <Icon name="MessageCircle" className="text-primary" size={20} />
              </a>
              <a 
                href="https://vk.com/vikomnet" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <Icon name="Share2" className="text-primary" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ООО Виком. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;