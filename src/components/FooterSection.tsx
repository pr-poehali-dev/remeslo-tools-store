
import { Link } from "react-router-dom";
import { Facebook, Instagram, YouTube, MapPin, Phone, Mail } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">РЕМЕСЛО</h3>
            <p className="text-slate-400 mb-6">
              Магазин профессиональных инструментов для мастеров своего дела.
              Качество, надежность, долговечность.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <YouTube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-lg">Категории</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/power-tools" className="text-slate-400 hover:text-white transition-colors">
                  Электроинструменты
                </Link>
              </li>
              <li>
                <Link to="/category/hand-tools" className="text-slate-400 hover:text-white transition-colors">
                  Ручные инструменты
                </Link>
              </li>
              <li>
                <Link to="/category/garden-tools" className="text-slate-400 hover:text-white transition-colors">
                  Садовые инструменты
                </Link>
              </li>
              <li>
                <Link to="/category/measuring" className="text-slate-400 hover:text-white transition-colors">
                  Измерительные инструменты
                </Link>
              </li>
              <li>
                <Link to="/category/accessories" className="text-slate-400 hover:text-white transition-colors">
                  Аксессуары
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-lg">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="text-slate-400 hover:text-white transition-colors">
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-slate-400 hover:text-white transition-colors">
                  Гарантия и возврат
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-400 hover:text-white transition-colors">
                  Блог
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-lg">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-400">г. Москва, ул. Мастеров, д. 42</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary" />
                <a href="tel:+74951234567" className="text-slate-400 hover:text-white transition-colors">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary" />
                <a href="mailto:info@remeslo.ru" className="text-slate-400 hover:text-white transition-colors">
                  info@remeslo.ru
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Магазин инструментов "Ремесло". Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
