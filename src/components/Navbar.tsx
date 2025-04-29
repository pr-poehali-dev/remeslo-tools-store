
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Menu, X, Search, User } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">РЕМЕСЛО</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-slate-700 hover:text-primary font-medium">
              Главная
            </Link>
            <Link to="/catalog" className="text-slate-700 hover:text-primary font-medium">
              Каталог
            </Link>
            <Link to="/promotions" className="text-slate-700 hover:text-primary font-medium">
              Акции
            </Link>
            <Link to="/about" className="text-slate-700 hover:text-primary font-medium">
              О нас
            </Link>
            <Link to="/contact" className="text-slate-700 hover:text-primary font-medium">
              Контакты
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-full hover:bg-slate-100"
            >
              <Search className="h-5 w-5 text-slate-700" />
            </button>
            <Link to="/account" className="p-2 rounded-full hover:bg-slate-100">
              <User className="h-5 w-5 text-slate-700" />
            </Link>
            <Link to="/cart" className="p-2 rounded-full hover:bg-slate-100 relative">
              <ShoppingCart className="h-5 w-5 text-slate-700" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart" className="p-2 relative">
              <ShoppingCart className="h-5 w-5 text-slate-700" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </Link>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar (conditionally rendered) */}
        {isSearchOpen && (
          <div className="py-3 border-t border-slate-100">
            <div className="relative">
              <Input 
                type="text" 
                placeholder="Поиск инструментов..." 
                className="w-full pl-10"
                autoFocus
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 py-3 border-t border-slate-100 space-y-2">
            <Link to="/" className="block py-2 text-slate-700 font-medium">
              Главная
            </Link>
            <Link to="/catalog" className="block py-2 text-slate-700 font-medium">
              Каталог
            </Link>
            <Link to="/promotions" className="block py-2 text-slate-700 font-medium">
              Акции
            </Link>
            <Link to="/about" className="block py-2 text-slate-700 font-medium">
              О нас
            </Link>
            <Link to="/contact" className="block py-2 text-slate-700 font-medium">
              Контакты
            </Link>
            <div className="pt-2">
              <Input type="text" placeholder="Поиск инструментов..." className="w-full" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
