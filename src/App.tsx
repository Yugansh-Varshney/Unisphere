import React from 'react';
import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { LandingPage } from "./components/LandingPage";
import { LoginForm } from "./components/auth/LoginForm";
import { SignupForm } from "./components/auth/SignupForm";
import { Dashboard } from "./components/Dashboard";
import { StudyPlanner } from "./components/features/StudyPlanner";
import { Toaster } from "./components/ui/sonner";
import { authService } from "./utils/auth";
import { apiService } from "./utils/api";
// CHnage form here

import { NotesHub } from './components/features/NotesHub/NotesHub'; // <-- ADD THIS LINE

// ... other imports


export default function App() {
  const [currentView, setCurrentView] = useState("home");
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on app load
  useEffect(() => {
    const checkSession = async () => {
      const result = await authService.getCurrentSession();
      console.log("Result from getCurrentSession:", result);
      if (result.user && result.session) {
        console.log("User from session:", result.user);
        setUser(result.user);
        setSession(result.session);
        apiService.setAccessToken(result.session.access_token);
        setCurrentView("dashboard");
      }
      setIsLoading(false);
    };

    checkSession();

    // Listen for auth state changes
    const {
      data: { subscription },
    } = authService.onAuthStateChange((user, session) => {
      console.log("Auth state change - User:", user);
      console.log("Auth state change - Session:", session);
      setUser(user);
      setSession(session);
      if (session) {
        apiService.setAccessToken(session.access_token);
      } else {
        apiService.setAccessToken(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = (userData: any, userSession: any) => {
    setUser(userData);
    setSession(userSession);
    apiService.setAccessToken(userSession.access_token);
    setCurrentView("dashboard");
  };

  const handleSignup = (userData: any, userSession: any) => {
    setUser(userData);
    setSession(userSession);
    apiService.setAccessToken(userSession.access_token);
    setCurrentView("dashboard");
  };

  const handleLogout = async () => {
    await authService.signOut();
    setUser(null);
    setSession(null);
    apiService.setAccessToken(null);
    setCurrentView("home");
  };

  const handleViewChange = (view: string) => {
    setCurrentView(view);
  };

  const handleGetStarted = () => {
    if (user) {
      setCurrentView("dashboard");
    } else {
      setCurrentView("signup");
    }
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case "home":
        return <LandingPage onGetStarted={handleGetStarted} />;
      case "login":
        return (
          <LoginForm
            onLogin={handleLogin}
            onSwitchToSignup={() => setCurrentView("signup")}
          />
        );
      case "signup":
        return (
          <SignupForm
            onSignup={handleSignup}
            onSwitchToLogin={() => setCurrentView("login")}
          />
        );
        
      case "dashboard":
        return user ? (
          <Dashboard
            user={user}
            onNavigate={handleViewChange}
          />
        ) : (
          <LandingPage onGetStarted={handleGetStarted} />
        );
      case "planner":
        return user ? (
          <StudyPlanner user={user} />
        ) : (
          <LandingPage onGetStarted={handleGetStarted} />
        );
      case "jobs":
        return user ? (
          <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold">
                  AI Job & Internship Finder
                </h1>
                <p className="text-muted-foreground">
                  Coming soon! AI-powered job matching tailored
                  to your skills and interests.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <LandingPage onGetStarted={handleGetStarted} />
        );
      case "notes":
      return user ? (
        <NotesHub /> // <-- REPLACE THE "COMING SOON" DIV WITH THIS
      ) : (
        <LandingPage onGetStarted={handleGetStarted} />
      );
      case "study-buddy":
        return user ? (
          <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold">
                  AI Study Buddy Matching
                </h1>
                <p className="text-muted-foreground">
                  Coming soon! Find the perfect study partners
                  based on your courses and learning style.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <LandingPage onGetStarted={handleGetStarted} />
        );
      case "roommate":
        return user ? (
          <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold">
                  Smart Roommate Finder
                </h1>
                <p className="text-muted-foreground">
                  Coming soon! AI-powered compatibility matching
                  for your ideal living companion.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <LandingPage onGetStarted={handleGetStarted} />
        );
      case "marketplace":
        return user ? (
          <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold">
                  Campus Marketplace
                </h1>
                <p className="text-muted-foreground">
                  Coming soon! Buy, sell, and exchange items
                  safely within your campus community.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <LandingPage onGetStarted={handleGetStarted} />
        );
      case "community":
        return user ? (
          <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold">
                  Peer Connect & Community
                </h1>
                <p className="text-muted-foreground">
                  Coming soon! Social networking features for
                  collaboration, group formation, and events.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <LandingPage onGetStarted={handleGetStarted} />
        );
      case "chatbot":
        return user ? (
          <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold">
                  AI Assistant Chatbot
                </h1>
                <p className="text-muted-foreground">
                  Coming soon! 24/7 intelligent assistant to
                  answer questions and guide your university
                  journey.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <LandingPage onGetStarted={handleGetStarted} />
        );
      default:
        return <LandingPage onGetStarted={handleGetStarted} />;
    }
  };

  // Show loading spinner while checking session
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="text-muted-foreground">
            Loading UniSphere...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation
        currentView={currentView}
        onViewChange={handleViewChange}
        user={user}
        onLogout={handleLogout}
      />
      {renderCurrentView()}
      <Toaster />
    </div>
  );
}