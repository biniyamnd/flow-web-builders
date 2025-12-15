import { Search, MessageSquare, CheckCircle, CreditCard } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Find Your Match",
    description: "Browse through our curated pool of talented freelancers or post your project requirements.",
  },
  {
    icon: MessageSquare,
    number: "02",
    title: "Connect & Discuss",
    description: "Chat directly with freelancers, discuss your vision, and review their portfolios.",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Collaborate",
    description: "Work together seamlessly with our integrated tools for file sharing and feedback.",
  },
  {
    icon: CreditCard,
    number: "04",
    title: "Pay Securely",
    description: "Release payment only when you're satisfied. Your funds are protected until delivery.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            How Link-Work Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Getting started is easy. Follow these simple steps to find your perfect freelancer.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border z-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-coral" />
                </div>
              )}
              
              <div className="relative bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300 group">
                <span className="absolute -top-3 -right-3 text-6xl font-display font-bold text-coral/10 group-hover:text-coral/20 transition-colors">
                  {step.number}
                </span>
                
                <div className="w-14 h-14 rounded-xl bg-accent-gradient flex items-center justify-center mb-4 shadow-glow">
                  <step.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold text-card-foreground mb-3 font-body">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground font-body">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
