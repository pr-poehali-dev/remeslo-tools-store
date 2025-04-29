
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном приложении здесь будет код для отправки данных на сервер
    alert("Сообщение отправлено! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-purple-100 to-blue-100 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-2">Контакты</h1>
            <p className="text-center text-slate-600 max-w-2xl mx-auto">
              Мы всегда рады помочь вам с выбором инструментов и ответить на все ваши вопросы
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Контактная информация */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold mb-6">Наши контакты</h2>
              
              <div className="flex items-start space-x-4">
                <MapPin className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-lg">Адрес</h3>
                  <p className="text-slate-600">ул. Мастеров, 42, Москва, Россия, 123456</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-lg">Телефоны</h3>
                  <p className="text-slate-600">+7 (999) 123-45-67 — отдел продаж</p>
                  <p className="text-slate-600">+7 (999) 765-43-21 — техническая поддержка</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-lg">Электронная почта</h3>
                  <p className="text-slate-600">info@remeslo.ru — общие вопросы</p>
                  <p className="text-slate-600">sales@remeslo.ru — отдел продаж</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-lg">Часы работы</h3>
                  <p className="text-slate-600">Пн-Пт: 9:00 — 20:00</p>
                  <p className="text-slate-600">Сб: 10:00 — 18:00</p>
                  <p className="text-slate-600">Вс: выходной</p>
                </div>
              </div>
            </div>
            
            {/* Форма обратной связи */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Напишите нам</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Иван Иванов" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+7 (XXX) XXX-XX-XX" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@mail.ru" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Опишите ваш вопрос или предложение..." 
                    rows={5} 
                    required 
                  />
                </div>
                
                <Button type="submit" className="w-full md:w-auto">
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>
          
          {/* Карта */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Как нас найти</h2>
            <div className="aspect-video bg-slate-200 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-slate-600">Здесь будет карта с местоположением магазина</p>
                {/* В реальном приложении здесь будет iframe с Google Maps или Яндекс Картами */}
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default Contact;
