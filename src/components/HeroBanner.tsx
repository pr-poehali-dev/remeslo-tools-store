
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-indigo-800 h-[500px] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-yellow-400"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-red-500"></div>
        <div className="absolute top-40 right-40 w-24 h-24 rounded-full bg-green-400"></div>
      </div>
      
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="w-full md:w-1/2 text-white z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Инструменты для настоящих мастеров
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Создавайте шедевры с профессиональными инструментами от магазина "Ремесло". Качество, проверенное профессионалами.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 border-0">
              Перейти в каталог
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
              Специальные предложения
            </Button>
          </div>
        </div>
        
        <div className="hidden md:block w-1/2 relative">
          <div className="absolute right-0 bottom-0 translate-y-1/4">
            <img 
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
              alt="Инструменты"
              className="rounded-tl-xl w-[450px] object-cover object-center shadow-xl transform rotate-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
