import { Star, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const freelancers = [
  {
    name: "Alex Rivera",
    role: "Full Stack Developer",
    location: "San Francisco, US",
    rating: 4.9,
    reviews: 187,
    hourlyRate: 85,
    avatar: "👨‍💻",
    skills: ["React", "Node.js", "TypeScript"],
    bgColor: "bg-coral/10",
  },
  {
    name: "Emma Watson",
    role: "Brand Designer",
    location: "London, UK",
    rating: 5.0,
    reviews: 234,
    hourlyRate: 75,
    avatar: "👩‍🎨",
    skills: ["Figma", "Branding", "UI/UX"],
    bgColor: "bg-mint/10",
  },
  {
    name: "Marcus Chen",
    role: "Motion Designer",
    location: "Tokyo, Japan",
    rating: 4.8,
    reviews: 156,
    hourlyRate: 90,
    avatar: "🧑‍💼",
    skills: ["After Effects", "3D", "Animation"],
    bgColor: "bg-gold/10",
  },
  {
    name: "Sofia Rodriguez",
    role: "Content Writer",
    location: "Barcelona, Spain",
    rating: 4.9,
    reviews: 312,
    hourlyRate: 55,
    avatar: "👩‍✍️",
    skills: ["SEO", "Copywriting", "Blogs"],
    bgColor: "bg-navy-light/10",
  },
];

const FreelancersSection = () => {
  return (
    <section id="freelancers" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Top Rated Freelancers
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl font-body">
              Work with the best talent in the industry, verified and rated by thousands of clients.
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0 gap-2">
            View All Freelancers
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {freelancers.map((freelancer, index) => (
            <div
              key={freelancer.name}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-16 h-16 rounded-full ${freelancer.bgColor} flex items-center justify-center text-3xl`}>
                  {freelancer.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground font-body">
                    {freelancer.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body">
                    {freelancer.role}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 font-body">
                <MapPin className="w-4 h-4" />
                {freelancer.location}
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-gold fill-gold" />
                  <span className="font-semibold text-card-foreground font-body">
                    {freelancer.rating}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground font-body">
                  ({freelancer.reviews} reviews)
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {freelancer.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground font-body"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <span className="text-xl font-bold text-card-foreground font-display">
                    ${freelancer.hourlyRate}
                  </span>
                  <span className="text-sm text-muted-foreground font-body">/hr</span>
                </div>
                <Button variant="accent" size="sm">
                  View Profile
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreelancersSection;
