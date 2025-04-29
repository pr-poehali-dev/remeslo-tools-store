
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: 1,
    name: "Перфоратор ProDrill X500",
    price: 12990,
    oldPrice: 15990,
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    badge: "Хит продаж"
  },
  {
    id: 2,
    name: "Набор отвёрток Universal 24 шт.",
    price: 2490,
    oldPrice: null,
    rating: 4.5,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    badge: "Новинка"
  },
  {
    id: 3,
    name: "Шуруповёрт аккумуляторный MasterForce",
    price: 7990,
    oldPrice: 9990,
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1590412200988-a436970781fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    badge: "Скидка"
  },
];

const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU").format(price);
  };

  return (
    <section className="my-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Популярные товары</h2>
        <Button variant="outline">Смотреть все</Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <div className="relative overflow-hidden">
              <div className="aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {product.badge && (
                <Badge className="absolute top-3 left-3 bg-primary">
                  {product.badge}
                </Badge>
              )}
              
              {/* Quick action buttons on hover */}
              <div 
                className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-3 transition-opacity duration-300 ${
                  hoveredProduct === product.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <Button size="icon" variant="secondary" className="rounded-full">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="secondary" className="rounded-full">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="secondary" className="rounded-full">
                  <Eye className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-medium text-lg mb-2 line-clamp-2">{product.name}</h3>
              
              <div className="flex items-center mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-sm ${i < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-300"}`}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-sm text-slate-500 ml-2">
                  ({product.reviews})
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xl font-bold">{formatPrice(product.price)} ₽</div>
                  {product.oldPrice && (
                    <div className="text-sm text-slate-500 line-through">
                      {formatPrice(product.oldPrice)} ₽
                    </div>
                  )}
                </div>
                <Button className="bg-primary hover:bg-primary/90" size="sm">
                  В корзину
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
