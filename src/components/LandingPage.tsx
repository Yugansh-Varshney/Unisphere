import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Brain, 
  Briefcase, 
  BookOpen, 
  Users, 
  Home, 
  ShoppingCart, 
  MessageCircle,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Zap
} from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  const features = [
    {
      icon: Brain,
      title: "Smart Study Planner",
      description: "AI-powered scheduling with personalized study suggestions and intelligent reminders",
      color: "text-blue-500"
    },
    {
      icon: Briefcase,
      title: "AI Job & Internship Finder",
      description: "Get tailored opportunities that match your skills, interests, and career goals",
      color: "text-green-500"
    },
    {
      icon: BookOpen,
      title: "Notes & Resource Hub",
      description: "Centralized platform to upload, share, and access study materials with your peers",
      color: "text-purple-500"
    },
    {
      icon: Users,
      title: "AI Study Buddy Matching",
      description: "Find the perfect study partners based on your courses and learning style",
      color: "text-orange-500"
    },
    {
      icon: Home,
      title: "Smart Roommate Finder",
      description: "AI-powered compatibility matching to find your ideal living companion",
      color: "text-pink-500"
    },
    {
      icon: ShoppingCart,
      title: "Campus Marketplace",
      description: "Buy, sell, and exchange items safely within your campus community",
      color: "text-indigo-500"
    },
    {
      icon: MessageCircle,
      title: "Peer Connect & Community",
      description: "Social networking features for collaboration, group formation, and events",
      color: "text-cyan-500"
    },
    {
      icon: Sparkles,
      title: "AI Assistant Chatbot",
      description: "24/7 intelligent assistant to answer questions and guide your university journey",
      color: "text-yellow-500"
    }
  ];

  const benefits = [
    "Save 10+ hours per week with smart automation",
    "Connect with like-minded students in your area",
    "Access personalized AI recommendations",
    "Centralize all your university needs in one platform",
    "Join a thriving campus community"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  <Zap className="w-3 h-3 mr-1" />
                  AI-Powered Platform
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  One Sphere for All{' '}
                  <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Campus Needs
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                  UniSphere revolutionizes your university experience with AI-powered tools for studying, 
                  networking, job hunting, and campus life. Everything you need, all in one place.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={onGetStarted} className="text-base px-8">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="text-base px-8">
                  Watch Demo
                </Button>
              </div>

              <div className="space-y-3">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1590579491624-f98f36d4c763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwdW5pdmVyc2l0eSUyMGNhbXB1c3xlbnwxfHx8fDE3NTkyNTczMTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Students studying together on campus"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                <p className="text-sm font-medium">Join 10,000+ students</p>
                <p className="text-xs opacity-90">already using UniSphere</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="w-fit mx-auto">
              Core Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Everything You Need for University Success
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From AI-powered study planning to smart roommate matching, UniSphere provides 
              intelligent solutions for every aspect of campus life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 bg-card/50 backdrop-blur">
                <CardHeader className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg bg-background flex items-center justify-center ${feature.color}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Transform Your University Experience?
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of students who are already using UniSphere to excel academically 
            and build meaningful connections on campus.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={onGetStarted} className="text-base px-8">
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8">
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border/50">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">10k+</p>
              <p className="text-sm text-muted-foreground">Active Students</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground">Universities</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">95%</p>
              <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">24/7</p>
              <p className="text-sm text-muted-foreground">AI Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}