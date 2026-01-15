import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ContactInfo = () => {
  return (
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
          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
            <Icon name="Mail" className="text-primary" size={24} />
          </div>
          <div>
            <div className="font-semibold">Email</div>
            <a href="mailto:info@vikom-net.ru" className="text-primary hover:underline">
              info@vikom-net.ru
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 bg-card rounded-xl">
          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
            <Icon name="MapPin" className="text-primary" size={24} />
          </div>
          <div>
            <div className="font-semibold">Адрес</div>
            <p className="text-muted-foreground">
              655770, Республика Хакасия Бейский район, с. Бея, ул.Горького,1Б
            </p>
          </div>
        </div>

        <Card className="border-none bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Clock" className="text-primary" size={24} />
              График работы
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Понедельник - Пятница:</span>
                  <span className="font-semibold text-foreground">8:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Суббота - Воскресенье:</span>
                  <span className="font-semibold text-foreground">Выходной</span>
                </div>
              </div>
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactInfo;