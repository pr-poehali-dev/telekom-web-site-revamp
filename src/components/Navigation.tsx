import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  onConnectClick: () => void;
}

const Navigation = ({ onConnectClick }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleConnectClick = () => {
    setIsMenuOpen(false);
    onConnectClick();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/Дельфин копия1.png" 
              alt="ООО Виком" 
              className="h-12 w-auto object-contain"
            />
            <span className="text-2xl font-bold gradient-text">ООО Виком</span>
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

          <div className="flex items-center gap-4">
            <Button onClick={onConnectClick} className="glow-effect hidden md:flex">
              Подключить
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
              aria-label="Меню"
            >
              {isMenuOpen ? (
                <Icon name="X" size={24} />
              ) : (
                <Icon name="Menu" size={24} />
              )}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="py-4 space-y-4">
              <a
                href="#tariffs"
                onClick={handleLinkClick}
                className="block text-foreground/80 hover:text-primary transition-colors py-2"
              >
                Тарифы
              </a>
              <a
                href="#tv"
                onClick={handleLinkClick}
                className="block text-foreground/80 hover:text-primary transition-colors py-2"
              >
                Телевидение
              </a>
              <a
                href="#promotions"
                onClick={handleLinkClick}
                className="block text-foreground/80 hover:text-primary transition-colors py-2"
              >
                Акции
              </a>
              <a
                href="#contacts"
                onClick={handleLinkClick}
                className="block text-foreground/80 hover:text-primary transition-colors py-2"
              >
                Контакты
              </a>
              <a
                href="http://stat.vikomtel.ru"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="block text-foreground/80 hover:text-primary transition-colors py-2"
              >
                Личный кабинет
              </a>
              <Button onClick={handleConnectClick} className="w-full glow-effect mt-4">
                Подключить
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
