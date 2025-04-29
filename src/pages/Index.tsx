
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import ProductCategories from "@/components/ProductCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <HeroBanner />
      <div className="container mx-auto px-4 py-12">
        <ProductCategories />
        <FeaturedProducts />
        <section className="my-16 bg-accent/20 rounded-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Мастерская идей</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Присоединяйтесь к нашему сообществу мастеров, делитесь проектами и получайте скидки на новые инструменты
            </p>
          </div>
          <div className="flex justify-center">
            <Button size="lg" className="mr-4 bg-primary hover:bg-primary/90">
              Присоединиться
            </Button>
            <Button variant="outline" size="lg">
              Узнать больше
            </Button>
          </div>
        </section>
      </div>
      <FooterSection />
    </div>
  );
};

export default Index;
