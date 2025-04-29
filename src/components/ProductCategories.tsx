
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Электроинструменты",
    image: "https://images.unsplash.com/photo-1580402427914-a6cc60858b2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    link: "/category/power-tools"
  },
  {
    id: 2,
    name: "Ручные инструменты",
    image: "https://images.unsplash.com/photo-1581147036324-c47a03a31afd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    link: "/category/hand-tools"
  },
  {
    id: 3,
    name: "Садовые инструменты",
    image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    link: "/category/garden-tools"
  }
];

const ProductCategories = () => {
  return (
    <section className="my-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-3">Категории инструментов</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Выберите категорию и найдите идеальный инструмент для ваших проектов
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link 
            key={category.id}
            to={category.link} 
            className="group relative overflow-hidden rounded-xl shadow-md transition-all hover-scale duration-300"
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                <p className="text-white/80 mt-2 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Перейти в категорию
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;
