import { projectId, publicAnonKey } from './supabase/info';

const API_BASE = `https://${projectId}.supabase.co/functions/v1/make-server-3042be65`;

export class APIService {
  private accessToken: string | null = null;

  setAccessToken(token: string | null) {
    this.accessToken = token;
  }

  private getHeaders() {
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.accessToken || publicAnonKey}`
    };
  }

  async getAIRecommendations(userId: string) {
    try {
      const response = await fetch(`${API_BASE}/ai/recommendations/${userId}`, {
        headers: this.getHeaders()
      });

      if (!response.ok) {
        throw new Error('Failed to get recommendations');
      }

      return await response.json();
    } catch (error) {
      console.error('Get AI recommendations error:', error);
      throw error;
    }
  }

  async getStudyOptimizations(userId: string) {
    try {
      const response = await fetch(`${API_BASE}/ai/study-optimization/${userId}`, {
        headers: this.getHeaders()
      });

      if (!response.ok) {
        throw new Error('Failed to get study optimizations');
      }

      return await response.json();
    } catch (error) {
      console.error('Get study optimizations error:', error);
      throw error;
    }
  }

  async createTask(taskData: {
    title: string;
    course: string;
    priority: string;
    duration: string;
    description: string;
    userId: string;
  }) {
    try {
      const response = await fetch(`${API_BASE}/tasks`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(taskData)
      });

      if (!response.ok) {
        throw new Error('Failed to create task');
      }

      return await response.json();
    } catch (error) {
      console.error('Create task error:', error);
      throw error;
    }
  }

  async getTasks(userId: string) {
    try {
      const response = await fetch(`${API_BASE}/tasks/${userId}`, {
        headers: this.getHeaders()
      });

      if (!response.ok) {
        throw new Error('Failed to get tasks');
      }

      return await response.json();
    } catch (error) {
      console.error('Get tasks error:', error);
      throw error;
    }
  }

  async updateStudyProgress(userId: string, progressData: {
    hours: number;
    tasksCompleted: number;
  }) {
    try {
      const response = await fetch(`${API_BASE}/study-progress/${userId}`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(progressData)
      });

      if (!response.ok) {
        throw new Error('Failed to update study progress');
      }

      return await response.json();
    } catch (error) {
      console.error('Update study progress error:', error);
      throw error;
    }
  }
}

export const apiService = new APIService();