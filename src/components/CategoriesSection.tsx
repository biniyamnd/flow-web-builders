import { 
  Palette, 
  Code, 
  PenTool, 
  Video, 
  Megaphone, 
  FileText, 
  Music, 
  BarChart 
} from "lucide-react";

const categories = [
  { icon: Palette, name: "Design", count: "12,450", color: "bg-coral/10 text-coral" },
  { icon: Code, name: "Development", count: "8,320", color: "bg-navy-light/10 text-navy-light" },
  { icon: PenTool, name: "Writing", count: "5,890", color: "bg-mint/10 text-mint" },
  { icon: Video, name: "Video", count: "4,120", color: "bg-gold/10 text-gold" },
  { icon: Megaphone, name: "Marketing", count: "6,780", color: "bg-coral/10 text-coral" },
  { icon: FileText, name: "Business", count: "3,450", color: "bg-navy-light/10 text-navy-light" },
  { icon: Music, name: "Music", count: "2,890", color: "bg-mint/10 text-mint" },
  { icon: BarChart, name: "Data", count: "4,560", color: "bg-gold/10 text-gold" },
];

const CategoriesSection = () => {
  return (
    <section id="categories" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Explore Popular Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Discover talented professionals across a wide range of skills and services
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-1 font-body">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground font-body">
                {category.count} freelancers
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
