// src/App.tsx

import React, { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { LandingPage } from "./components/LandingPage";
import { LoginForm } from "./components/auth/LoginForm";
import { SignupForm } from "./components/auth/SignupForm";
import { Dashboard } from "./components/Dashboard";
import { StudyPlanner } from "./components/features/StudyPlanner";
import { Toaster } from "./components/ui/sonner";
import { authService } from "./utils/auth";
import { apiService } from "./utils/api";
import { Community } from './components/features/Community/Community';
import { NotesHub } from './components/features/NotesHub/NotesHub';
import { JobFinder } from './components/features/JobFinder/JobFinder';
import { Marketplace } from './components/features/Marketplace/Marketplace';
import ChatWindow from './components/features/AIChatbot/ChatWindow';

export default function App() {
  const [currentView, setCurrentView] = useState("home");
  const [user, setUser] = useState<any>(null);
  const [session, setSession] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  // ✅ 1. Add state to hold the shared post ID from the URL
  const [initialPostId, setInitialPostId] = useState<string | null>(null);

  useEffect(() => {
    // ✅ 2. Check the URL for a post ID when the app first loads
    const hash = window.location.hash;
    if (hash && hash.startsWith('#post_')) {
      // If we find a post ID, save it and set the view to community
      setInitialPostId(hash.substring(1)); // Remove the '#'
      setCurrentView("community");
    }

    const checkSession = async () => {
      const result = await authService.getCurrentSession();
      if (result.user && result.session) {
        setUser(result.user);
        setSession(result.session);
        apiService.setAccessToken(result.session.access_token);
        // Only go to dashboard if a specific post wasn't requested
        if (!initialPostId) {
            setCurrentView("dashboard");
        }
      }
      setIsLoading(false);
    };
    checkSession();

    const { data: { subscription } } = authService.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session) {
        apiService.setAccessToken(session.access_token);
      } else {
        apiService.setAccessToken(null);
      }
    });

    return () => subscription.unsubscribe();
  }, [initialPostId]); // Add initialPostId to dependency array

  // ... (all your handler functions like handleLogin, handleLogout, etc. remain the same)
  const handleLogin = (userData: any, userSession: any) => {
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
        return <LoginForm onLogin={handleLogin} onSwitchToSignup={() => setCurrentView("signup")} />;
      case "signup":
        // Assuming SignupForm is similar to LoginForm
        return <SignupForm onSignup={handleLogin} onSwitchToLogin={() => setCurrentView("login")} />;
      case "dashboard":
        return user ? <Dashboard user={user} onNavigate={handleViewChange} /> : <LandingPage onGetStarted={handleGetStarted} />;
      case "planner":
        return user ? <StudyPlanner user={user} /> : <LandingPage onGetStarted={handleGetStarted} />;
      case "jobs":
        return user ? <JobFinder /> : <LandingPage onGetStarted={handleGetStarted} />;
      case "notes":
        return user ? <NotesHub /> : <LandingPage onGetStarted={handleGetStarted} />;
      case "marketplace":
        return user ? <Marketplace /> : <LandingPage onGetStarted={handleGetStarted} />;
      case "community":
        // ✅ 3. Pass the post ID down to the Community component
        return user ? <Community initialPostId={initialPostId} /> : <LandingPage onGetStarted={handleGetStarted} />;
      case "chatbot":
        return user ? <ChatWindow /> : <LandingPage onGetStarted={handleGetStarted} />;
      default:
        return <LandingPage onGetStarted={handleGetStarted} />;
    }
  };

  if (isLoading) {
    // ... (loading spinner remains the same)
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p>Loading...</p>
      </div>
    )
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