import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Moon, Sun, GraduationCap, Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

interface NavigationProps {
  currentView: string;
  onViewChange: (view: string) => void;
  user: any;
  onLogout: () => void;
}

export function Navigation({ currentView, onViewChange, user, onLogout }: NavigationProps) {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle('dark', newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  };

  const navItems = user ? [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'planner', label: 'Study Planner' },
    { id: 'jobs', label: 'Jobs & Internships' },
    { id: 'notes', label: 'Notes Hub' },
    { id: 'study-buddy', label: 'Study Buddy' },
    { id: 'roommate', label: 'Roommate Finder' },
    { id: 'marketplace', label: 'Marketplace' },
    { id: 'community', label: 'Community' },
    { id: 'chatbot', label: 'AI Assistant' },
  ] : [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'about', label: 'About' },
  ];

  const handleNavClick = (viewId: string) => {
    onViewChange(viewId);
    setIsOpen(false);
  };

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => handleNavClick(user ? 'dashboard' : 'home')}
          >
            <div className="bg-primary text-primary-foreground p-2 rounded-lg">
              <GraduationCap className="h-6 w-6" />
            </div>
            <span className="text-xl font-medium">UniSphere</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentView === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => handleNavClick(item.id)}
                className="px-3 py-2"
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            {user ? (
              <div className="hidden md:flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Welcome, {user.name}</span>
                <Button variant="outline" size="sm" onClick={onLogout}>
                  Logout
                </Button>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-2">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => handleNavClick('login')}
                >
                  Login
                </Button>
                <Button 
                  size="sm"
                  onClick={() => handleNavClick('signup')}
                >
                  Sign Up
                </Button>
              </div>
            )}

            {/* Mobile menu button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden p-2">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-6">
                  {navItems.map((item) => (
                    <Button
                      key={item.id}
                      variant={currentView === item.id ? "default" : "ghost"}
                      size="sm"
                      onClick={() => handleNavClick(item.id)}
                      className="justify-start"
                    >
                      {item.label}
                    </Button>
                  ))}
                  
                  {user ? (
                    <div className="border-t pt-4 space-y-2">
                      <p className="text-sm text-muted-foreground">Welcome, {user.name}</p>
                      <Button variant="outline" size="sm" onClick={onLogout} className="w-full">
                        Logout
                      </Button>
                    </div>
                  ) : (
                    <div className="border-t pt-4 space-y-2">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleNavClick('login')}
                        className="w-full"
                      >
                        Login
                      </Button>
                      <Button 
                        size="sm"
                        onClick={() => handleNavClick('signup')}
                        className="w-full"
                      >
                        Sign Up
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}