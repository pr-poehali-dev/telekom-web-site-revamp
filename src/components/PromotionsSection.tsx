import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Promotion {
  title: string;
  description: string;
  discount: string;
  validUntil: string;
  category: 'internet' | 'tv' | 'combo';
}

interface PromotionsSectionProps {
  promotions: Promotion[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const PromotionsSection = ({ promotions, selectedCategory, onCategoryChange }: PromotionsSectionProps) => {
  const filteredPromotions = selectedCategory === 'all' 
    ? promotions 
    : promotions.filter(p => p.category === selectedCategory);

  return (
    <section id="promotions" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Акции и спецпредложения</h2>
          <p className="text-xl text-muted-foreground">Выгодные предложения для вас</p>
        </div>

        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            onClick={() => onCategoryChange('all')}
          >
            Все акции
          </Button>
          <Button
            variant={selectedCategory === 'internet' ? 'default' : 'outline'}
            onClick={() => onCategoryChange('internet')}
          >
            Интернет
          </Button>
          <Button
            variant={selectedCategory === 'tv' ? 'default' : 'outline'}
            onClick={() => onCategoryChange('tv')}
          >
            ТВ
          </Button>
          <Button
            variant={selectedCategory === 'combo' ? 'default' : 'outline'}
            onClick={() => onCategoryChange('combo')}
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
  );
};

export default PromotionsSection;
