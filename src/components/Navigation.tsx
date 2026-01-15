import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  onConnectClick: () => void;
}

const Navigation = ({ onConnectClick }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['tariffs', 'tv', 'services', 'contacts'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            <a 
              href="#tariffs" 
              className={`transition-colors ${activeSection === 'tariffs' ? 'text-primary font-semibold' : 'text-foreground/80 hover:text-primary'}`}
            >
              Тарифы
            </a>
            <a 
              href="#tv" 
              className={`transition-colors ${activeSection === 'tv' ? 'text-primary font-semibold' : 'text-foreground/80 hover:text-primary'}`}
            >
              Телевидение
            </a>
            <a 
              href="#services" 
              className={`transition-colors ${activeSection === 'services' ? 'text-primary font-semibold' : 'text-foreground/80 hover:text-primary'}`}
            >
              Сервисы
            </a>
            <a 
              href="#contacts" 
              className={`transition-colors ${activeSection === 'contacts' ? 'text-primary font-semibold' : 'text-foreground/80 hover:text-primary'}`}
            >
              Контакты
            </a>
            <Button
              asChild
              className="glow-effect"
            >
              <a
                href="http://stat.vikomtel.ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                Личный кабинет
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-4">

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
                className={`block transition-colors py-2 ${activeSection === 'tariffs' ? 'text-primary font-semibold' : 'text-foreground/80 hover:text-primary'}`}
              >
                Тарифы
              </a>
              <a
                href="#tv"
                onClick={handleLinkClick}
                className={`block transition-colors py-2 ${activeSection === 'tv' ? 'text-primary font-semibold' : 'text-foreground/80 hover:text-primary'}`}
              >
                Телевидение
              </a>
              <a
                href="#services"
                onClick={handleLinkClick}
                className={`block transition-colors py-2 ${activeSection === 'services' ? 'text-primary font-semibold' : 'text-foreground/80 hover:text-primary'}`}
              >
                Сервисы
              </a>
              <a
                href="#contacts"
                onClick={handleLinkClick}
                className={`block transition-colors py-2 ${activeSection === 'contacts' ? 'text-primary font-semibold' : 'text-foreground/80 hover:text-primary'}`}
              >
                Контакты
              </a>
              <Button
                asChild
                className="w-full glow-effect mt-4"
              >
                <a
                  href="http://stat.vikomtel.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                >
                  Личный кабинет
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;