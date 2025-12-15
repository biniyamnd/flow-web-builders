import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jennifer Adams",
    role: "CEO, TechStart",
    content: "Link-Work transformed how we build our team. Found amazing developers within days, not months. The quality of talent here is unmatched.",
    rating: 5,
    avatar: "👩‍💼",
  },
  {
    name: "Michael Torres",
    role: "Founder, DesignHub",
    content: "As a startup founder, I needed flexibility. Link-Work gave me access to world-class designers without the overhead of full-time hires.",
    rating: 5,
    avatar: "👨‍💻",
  },
  {
    name: "Sarah Kim",
    role: "Marketing Director",
    content: "The platform is intuitive, the talent is exceptional, and the support team is always there when you need them. Highly recommended!",
    rating: 5,
    avatar: "👩‍🎤",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-coral/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-coral/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto font-body">
            Join thousands of satisfied clients who have found their perfect match on Link-Work.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 shadow-lg relative group hover:-translate-y-1 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-coral/20" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              
              <p className="text-card-foreground mb-6 font-body leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground font-body">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground font-body">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
