import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building2, Briefcase, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

type UserType = "institution" | "freelancer" | null;

const Auth = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const defaultTab = searchParams.get("tab") === "register" ? "register" : "login";
  
  const [activeTab, setActiveTab] = useState<"login" | "register">(defaultTab);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userType, setUserType] = useState<UserType>(null);
  
  // Form states
  const [loginForm, setLoginForm] = useState({ email: "", password: "", userType: null as UserType });
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginForm.userType) {
      toast({ title: "Please select your account type", variant: "destructive" });
      return;
    }
    toast({ title: "Login successful!" });
    navigate(loginForm.userType === "institution" ? "/institution" : "/freelancer");
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userType) {
      toast({ title: "Please select your account type", variant: "destructive" });
      return;
    }
    if (registerForm.password !== registerForm.confirmPassword) {
      toast({ title: "Passwords do not match", variant: "destructive" });
      return;
    }
    toast({ title: "Account created successfully!" });
    navigate(userType === "institution" ? "/institution" : "/freelancer");
  };

  return (
    <div className="min-h-screen bg-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-coral/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Back to Home */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="max-w-md mx-auto">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <div className="w-12 h-12 rounded-xl bg-accent-gradient flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                <span className="text-accent-foreground font-bold text-2xl font-display">L</span>
              </div>
              <span className="text-3xl font-display font-bold text-primary-foreground">
                Link<span className="text-coral">Work</span>
              </span>
            </Link>
          </div>

          {/* Auth Card */}
          <div className="bg-card/10 backdrop-blur-lg rounded-3xl p-8 border border-primary-foreground/10 shadow-2xl">
            {/* Tabs */}
            <div className="flex gap-2 mb-8 bg-primary-foreground/5 rounded-xl p-1">
              <button
                onClick={() => setActiveTab("login")}
                className={`flex-1 py-3 px-4 rounded-lg font-body font-medium transition-all ${
                  activeTab === "login"
                    ? "bg-coral text-primary-foreground shadow-md"
                    : "text-primary-foreground/60 hover:text-primary-foreground"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setActiveTab("register")}
                className={`flex-1 py-3 px-4 rounded-lg font-body font-medium transition-all ${
                  activeTab === "register"
                    ? "bg-coral text-primary-foreground shadow-md"
                    : "text-primary-foreground/60 hover:text-primary-foreground"
                }`}
              >
                Register
              </button>
            </div>

            {/* Login Form */}
            {activeTab === "login" && (
              <form onSubmit={handleLogin} className="space-y-6 animate-fade-in">
                <div className="space-y-2">
                  <Label htmlFor="login-email" className="text-primary-foreground/80">
                    Email
                  </Label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="Enter your email"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                    className="bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-coral"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="login-password" className="text-primary-foreground/80">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="login-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={loginForm.password}
                      onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                      className="bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-coral pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-foreground/50 hover:text-primary-foreground"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* User Type Selection for Login */}
                <div className="space-y-3">
                  <Label className="text-primary-foreground/80">I am a...</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setLoginForm({ ...loginForm, userType: "institution" })}
                      className={`p-3 rounded-xl border-2 transition-all ${
                        loginForm.userType === "institution"
                          ? "border-coral bg-coral/20 shadow-lg"
                          : "border-primary-foreground/20 hover:border-primary-foreground/40 bg-primary-foreground/5"
                      }`}
                    >
                      <Building2 className={`w-6 h-6 mx-auto mb-1 ${loginForm.userType === "institution" ? "text-coral" : "text-primary-foreground/60"}`} />
                      <p className={`font-body text-sm font-medium ${loginForm.userType === "institution" ? "text-primary-foreground" : "text-primary-foreground/80"}`}>
                        Institution
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setLoginForm({ ...loginForm, userType: "freelancer" })}
                      className={`p-3 rounded-xl border-2 transition-all ${
                        loginForm.userType === "freelancer"
                          ? "border-coral bg-coral/20 shadow-lg"
                          : "border-primary-foreground/20 hover:border-primary-foreground/40 bg-primary-foreground/5"
                      }`}
                    >
                      <Briefcase className={`w-6 h-6 mx-auto mb-1 ${loginForm.userType === "freelancer" ? "text-coral" : "text-primary-foreground/60"}`} />
                      <p className={`font-body text-sm font-medium ${loginForm.userType === "freelancer" ? "text-primary-foreground" : "text-primary-foreground/80"}`}>
                        Freelancer
                      </p>
                    </button>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button type="button" className="text-sm text-coral hover:underline">
                    Forgot Password?
                  </button>
                </div>

                <Button type="submit" variant="hero" className="w-full" size="lg">
                  Sign In
                </Button>

                <p className="text-center text-primary-foreground/60 text-sm">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setActiveTab("register")}
                    className="text-coral hover:underline font-medium"
                  >
                    Register
                  </button>
                </p>
              </form>
            )}

            {/* Register Form */}
            {activeTab === "register" && (
              <form onSubmit={handleRegister} className="space-y-6 animate-fade-in">
                <div className="space-y-2">
                  <Label htmlFor="register-name" className="text-primary-foreground/80">
                    Full Name
                  </Label>
                  <Input
                    id="register-name"
                    type="text"
                    placeholder="Enter your full name"
                    value={registerForm.name}
                    onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
                    className="bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-coral"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-email" className="text-primary-foreground/80">
                    Email
                  </Label>
                  <Input
                    id="register-email"
                    type="email"
                    placeholder="Enter your email"
                    value={registerForm.email}
                    onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                    className="bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-coral"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-password" className="text-primary-foreground/80">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="register-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      value={registerForm.password}
                      onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                      className="bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-coral pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-foreground/50 hover:text-primary-foreground"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-confirm" className="text-primary-foreground/80">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="register-confirm"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      value={registerForm.confirmPassword}
                      onChange={(e) => setRegisterForm({ ...registerForm, confirmPassword: e.target.value })}
                      className="bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-coral pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-foreground/50 hover:text-primary-foreground"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* User Type Selection */}
                <div className="space-y-3">
                  <Label className="text-primary-foreground/80">I am a...</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setUserType("institution")}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        userType === "institution"
                          ? "border-coral bg-coral/20 shadow-lg"
                          : "border-primary-foreground/20 hover:border-primary-foreground/40 bg-primary-foreground/5"
                      }`}
                    >
                      <Building2 className={`w-8 h-8 mx-auto mb-2 ${userType === "institution" ? "text-coral" : "text-primary-foreground/60"}`} />
                      <p className={`font-body font-medium ${userType === "institution" ? "text-primary-foreground" : "text-primary-foreground/80"}`}>
                        Institution
                      </p>
                      <p className="text-xs text-primary-foreground/50 mt-1">
                        Hire talent
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setUserType("freelancer")}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        userType === "freelancer"
                          ? "border-coral bg-coral/20 shadow-lg"
                          : "border-primary-foreground/20 hover:border-primary-foreground/40 bg-primary-foreground/5"
                      }`}
                    >
                      <Briefcase className={`w-8 h-8 mx-auto mb-2 ${userType === "freelancer" ? "text-coral" : "text-primary-foreground/60"}`} />
                      <p className={`font-body font-medium ${userType === "freelancer" ? "text-primary-foreground" : "text-primary-foreground/80"}`}>
                        Freelancer
                      </p>
                      <p className="text-xs text-primary-foreground/50 mt-1">
                        Offer services
                      </p>
                    </button>
                  </div>
                </div>

                <Button type="submit" variant="hero" className="w-full" size="lg">
                  Create Account
                </Button>

                <p className="text-center text-primary-foreground/60 text-sm">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setActiveTab("login")}
                    className="text-coral hover:underline font-medium"
                  >
                    Sign In
                  </button>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
