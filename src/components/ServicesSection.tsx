import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
  image?: string;
}

interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection = ({ services }: ServicesSectionProps) => {
  return (
    <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Сервисы и услуги</h2>
          <p className="text-xl text-muted-foreground">Дополнительные возможности для вашего комфорта</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="card-3d animate-slide-up hover:border-primary/50 transition-all duration-300 hover:scale-105 overflow-hidden" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.image && (
                <div className="relative w-full h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              )}
              <CardHeader>
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={service.icon} className="text-primary" size={32} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Icon name="Check" className="text-primary mt-0.5 shrink-0" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;