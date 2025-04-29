
import { useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Перфоратор DeWalt D25134K",
      price: 9990,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 2,
      name: "Дрель-шуруповерт Bosch GSR 18V-55",
      price: 7590,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1572981779307-38ab55a4a2fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 3,
      name: "Набор инструментов Kraftool 27970-H42",
      price: 4990,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1581147036324-c47a03ff9d9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80"
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Корзина</h1>
        
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 text-gray-300 mb-4">
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            <h2 className="text-xl font-semibold mb-2">Ваша корзина пуста</h2>
            <p className="text-gray-500 mb-6">Добавьте товары, чтобы начать покупки</p>
            <Button className="bg-primary hover:bg-primary/90" size="lg">
              Перейти в каталог
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100">
                  <h2 className="text-lg font-semibold">Товары ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})</h2>
                </div>
                
                <ul className="divide-y divide-gray-100">
                  {cartItems.map(item => (
                    <li key={item.id} className="p-6 flex flex-col sm:flex-row items-start sm:items-center">
                      <div className="flex-shrink-0 h-24 w-24 bg-gray-100 rounded-md overflow-hidden">
                        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                      </div>
                      
                      <div className="sm:ml-6 mt-4 sm:mt-0 flex-1">
                        <h3 className="text-base font-medium text-gray-900">{item.name}</h3>
                        <p className="mt-1 text-sm text-gray-500">Артикул: {100000 + item.id}</p>
                      </div>
                      
                      <div className="mt-4 sm:mt-0 flex flex-col sm:items-end">
                        <p className="text-lg font-medium text-gray-900">{item.price.toLocaleString()} ₽</p>
                        
                        <div className="mt-2 flex items-center">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          
                          <span className="mx-3 text-gray-700 w-6 text-center">{item.quantity}</span>
                          
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                          
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="ml-4 p-1 text-gray-400 hover:text-red-500"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Сумма заказа</h2>
                
                <dl className="space-y-3">
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Товары ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})</dt>
                    <dd className="font-medium">{calculateTotal().toLocaleString()} ₽</dd>
                  </div>
                  
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Доставка</dt>
                    <dd className="font-medium">Бесплатно</dd>
                  </div>
                  
                  <Separator className="my-3" />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <dt>Итого</dt>
                    <dd>{calculateTotal().toLocaleString()} ₽</dd>
                  </div>
                </dl>
                
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90" size="lg">
                  Оформить заказ
                </Button>
                
                <p className="mt-3 text-xs text-gray-500 text-center">
                  Оплачивая заказ, вы соглашаетесь с условиями оферты
                </p>
              </div>
              
              <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-sm font-medium mb-3">Промокод</h3>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Введите промокод"
                    className="flex-1 py-2 px-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  />
                  <Button variant="outline" className="rounded-l-none border-l-0">
                    Применить
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <FooterSection />
    </>
  );
};

export default Cart;
