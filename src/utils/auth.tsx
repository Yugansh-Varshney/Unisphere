import { supabase } from './supabase/client';
import { projectId, publicAnonKey } from './supabase/info';

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  university: string;
  year: string;
  major: string;
}

export interface AuthResponse {
  user: UserProfile | null;
  session: any;
  error: string | null;
}

export const authService = {
  // Sign up with email and password
  async signUp(email: string, password: string, userData: {
    name: string;
    university: string;
    year: string;
    major: string;
  }): Promise<AuthResponse> {
    try {
      // First create the user via our server endpoint
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-3042be65/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({
          email,
          password,
          ...userData
        })
      });

      const result = await response.json();

      if (!response.ok) {
        return {
          user: null,
          session: null,
          error: result.error || 'Failed to create account'
        };
      }

      // Now sign in the user
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        return {
          user: null,
          session: null,
          error: error.message
        };
      }

      return {
        user: {
          id: data.user.id,
          email: data.user.email!,
          name: userData.name,
          university: userData.university,
          year: userData.year,
          major: userData.major
        },
        session: data.session,
        error: null
      };
    } catch (error) {
      console.error('Signup error:', error);
      return {
        user: null,
        session: null,
        error: 'Failed to create account. Please try again.'
      };
    }
  },

  // Sign in with email and password
  async signIn(email: string, password: string): Promise<AuthResponse> {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        return {
          user: null,
          session: null,
          error: error.message
        };
      }

      // Get user metadata from the session
      const user = data.user;
      const metadata = user.user_metadata;

      return {
        user: {
          id: user.id,
          email: user.email!,
          name: metadata.name || 'User',
          university: metadata.university || '',
          year: metadata.year || '',
          major: metadata.major || ''
        },
        session: data.session,
        error: null
      };
    } catch (error) {
      console.error('Signin error:', error);
      return {
        user: null,
        session: null,
        error: 'Failed to sign in. Please try again.'
      };
    }
  },

  // Sign in with Google
  async signInWithGoogle(): Promise<AuthResponse> {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin
        }
      });

      if (error) {
        return {
          user: null,
          session: null,
          error: error.message
        };
      }

      // Note: OAuth flow will redirect, so we won't get immediate user data here
      return {
        user: null,
        session: null,
        error: null
      };
    } catch (error) {
      console.error('Google signin error:', error);
      return {
        user: null,
        session: null,
        error: 'Failed to sign in with Google. Please try again.'
      };
    }
  },

  // Get current session
  async getCurrentSession(): Promise<AuthResponse> {
    try {
      const { data, error } = await supabase.auth.getSession();

      if (error || !data.session) {
        return {
          user: null,
          session: null,
          error: error?.message || 'No active session'
        };
      }

      const user = data.session.user;
      const metadata = user.user_metadata;

      return {
        user: {
          id: user.id,
          email: user.email!,
          name: metadata.name || 'User',
          university: metadata.university || '',
          year: metadata.year || '',
          major: metadata.major || ''
        },
        session: data.session,
        error: null
      };
    } catch (error) {
      console.error('Get session error:', error);
      return {
        user: null,
        session: null,
        error: 'Failed to get session'
      };
    }
  },

  // Sign out
  async signOut(): Promise<{ error: string | null }> {
    try {
      const { error } = await supabase.auth.signOut();
      return { error: error?.message || null };
    } catch (error) {
      console.error('Signout error:', error);
      return { error: 'Failed to sign out' };
    }
  },

  // Listen for auth state changes
  onAuthStateChange(callback: (user: UserProfile | null, session: any) => void) {
    return supabase.auth.onAuthStateChange((event, session) => {
      if (session && session.user) {
        const user = session.user;
        const metadata = user.user_metadata;
        
        callback({
          id: user.id,
          email: user.email!,
          name: metadata.name || 'User',
          university: metadata.university || '',
          year: metadata.year || '',
          major: metadata.major || ''
        }, session);
      } else {
        callback(null, null);
      }
    });
  }
};