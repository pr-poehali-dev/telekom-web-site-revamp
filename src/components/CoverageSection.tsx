import Icon from '@/components/ui/icon';

const CoverageSection = () => {
  const locations = [
    'с. Бея',
    'с. Сабинка',
    'с. Кирба',
    'с. Аскиз'
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Зона покрытия
          </h2>
          <p className="text-muted-foreground text-lg">
            Наши услуги доступны в следующих населённых пунктах
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <div
              key={index}
              className="group relative bg-card hover:bg-card/80 border border-border rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                  <Icon name="MapPin" className="text-primary" size={32} />
                </div>
                
                <h3 className="font-semibold text-lg text-foreground">
                  {location}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Не нашли свой населённый пункт?{' '}
            <a href="#contacts" className="text-primary hover:underline font-semibold">
              Свяжитесь с нами
            </a>
            {' '}для уточнения возможности подключения
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;