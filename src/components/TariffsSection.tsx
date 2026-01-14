import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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

interface TariffsSectionProps {
  activeTab: string;
  onTabChange: (value: string) => void;
  tariffs: Tariff[];
  tvPackages: TVPackage[];
}

const TariffsSection = ({ activeTab, onTabChange, tariffs, tvPackages }: TariffsSectionProps) => {
  return (
    <>
      <section id="tariffs" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Тарифные планы</h2>
            <p className="text-xl text-muted-foreground">Выберите оптимальный тариф для себя</p>
          </div>

          <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tvPackages.map((pkg, index) => (
              <Card
                key={pkg.name}
                className={`card-3d animate-slide-up ${pkg.premium ? 'border-secondary glow-effect' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{pkg.name}</CardTitle>
                    {pkg.hd && (
                      <Badge variant="secondary" className="ml-2 shrink-0">
                        HD
                      </Badge>
                    )}
                  </div>
                  {pkg.channels > 0 && (
                    <CardDescription>{pkg.channels}+ каналов</CardDescription>
                  )}
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <span className="text-4xl font-bold gradient-text">{pkg.price}</span>
                    <span className="text-muted-foreground ml-2">₽/мес</span>
                  </div>
                  <ul className="space-y-1.5">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Icon name="Check" className="text-secondary mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-xs">{feature}</span>
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
    </>
  );
};

export default TariffsSection;