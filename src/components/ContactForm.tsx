import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://functions.poehali.dev/38253b90-960e-4b29-93c5-8b351f9362d2', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input 
            type="text" 
            placeholder="Имя" 
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Input 
            type="tel" 
            placeholder="Телефон" 
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Input 
            type="email" 
            placeholder="Email" 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Textarea 
            placeholder="Сообщение" 
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>
        <Button 
          type="submit" 
          className="w-full" 
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
        </Button>
        {submitStatus === 'success' && (
          <p className="text-green-600 text-sm">Спасибо! Мы скоро с вами свяжемся.</p>
        )}
        {submitStatus === 'error' && (
          <p className="text-red-600 text-sm">Произошла ошибка. Попробуйте еще раз.</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
