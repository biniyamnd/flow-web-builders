import { Button } from "@/components/ui/button";
import { Search, ArrowRight, Star, Users, Briefcase } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-hero min-h-screen pt-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-coral/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-coral/5 rounded-full blur-3xl animate-pulse-soft delay-300" />
      
      <div className="container mx-auto px-6 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-up">
              <Star className="w-4 h-4 text-gold fill-gold" />
              <span className="text-sm font-body">Trusted by 50,000+ professionals</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 animate-fade-up delay-100">
              Find the perfect{" "}
              <span className="text-gradient">freelancer</span>{" "}
              for your project
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl font-body animate-fade-up delay-200">
              Connect with top-tier talent worldwide. From design to development, 
              discover skilled professionals ready to bring your vision to life.
            </p>
            
            {/* Search Bar */}
            <div className="bg-primary-foreground rounded-2xl p-2 flex flex-col sm:flex-row gap-2 shadow-lg mb-8 animate-fade-up delay-300">
              <div className="flex-1 flex items-center gap-3 px-4">
                <Search className="w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="What service are you looking for?"
                  className="w-full py-3 bg-transparent outline-none text-foreground font-body placeholder:text-muted-foreground"
                />
              </div>
              <Button variant="hero" size="lg" className="gap-2">
                Search
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 animate-fade-up delay-400">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-coral" />
                </div>
                <div>
                  <p className="text-2xl font-bold font-display">50K+</p>
                  <p className="text-sm text-primary-foreground/60 font-body">Freelancers</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-coral" />
                </div>
                <div>
                  <p className="text-2xl font-bold font-display">100K+</p>
                  <p className="text-sm text-primary-foreground/60 font-body">Projects Done</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <Star className="w-6 h-6 text-coral fill-coral" />
                </div>
                <div>
                  <p className="text-2xl font-bold font-display">4.9</p>
                  <p className="text-sm text-primary-foreground/60 font-body">Average Rating</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Floating Cards */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px]">
              {/* Main Card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 bg-card rounded-2xl p-6 shadow-card animate-float">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                    <span className="text-2xl">👩‍💻</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground font-body">Sarah Chen</h4>
                    <p className="text-sm text-muted-foreground font-body">UI/UX Designer</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2 font-body">5.0 (234)</span>
                </div>
                <p className="text-sm text-muted-foreground font-body">
                  Creating beautiful, user-centered designs that drive results.
                </p>
              </div>
              
              {/* Floating Badge 1 */}
              <div className="absolute top-10 right-10 bg-card rounded-xl p-4 shadow-card animate-float delay-200">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-mint/20 flex items-center justify-center">
                    <span className="text-mint text-lg">✓</span>
                  </div>
                  <span className="text-sm font-medium text-card-foreground font-body">Project Complete!</span>
                </div>
              </div>
              
              {/* Floating Badge 2 */}
              <div className="absolute bottom-20 left-0 bg-card rounded-xl p-4 shadow-card animate-float delay-400">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-coral flex items-center justify-center text-sm">👨</div>
                    <div className="w-8 h-8 rounded-full bg-mint flex items-center justify-center text-sm">👩</div>
                    <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-sm">👨</div>
                  </div>
                  <span className="text-sm text-card-foreground font-body">+2.5k joined today</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
