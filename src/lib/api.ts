interface User {
  id: number;
  email: string;
  created_at: string;
}

interface Session {
  access_token: string;
}

interface AuthResponse {
  user: User;
  session: Session;
}

class ApiClient {
  private token: string | null = null;
  private baseUrl: string;

  constructor() {
    // Determine API base URL based on environment
    this.baseUrl = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
      ? 'http://localhost:3001'  // Development
      : '/api';  // Production with nginx proxy

    // Get token from localStorage on initialization
    this.token = localStorage.getItem('auth_token');
  }

  private getHeaders() {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    return headers;
  }

  private async request(endpoint: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          ...this.getHeaders(),
          ...options.headers,
        },
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({ 
          error: `HTTP ${response.status}: ${response.statusText}` 
        }));
        throw new Error(error.error || `Request failed with status ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error('API Request failed:', {
        url,
        method: options.method || 'GET',
        error: error instanceof Error ? error.message : String(error)
      });
      throw error;
    }
  }

  // Auth methods
  async register(email: string, password: string): Promise<AuthResponse> {
    const data = await this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    if (data.session?.access_token) {
      this.token = data.session.access_token;
      localStorage.setItem('auth_token', this.token);
    }

    return data;
  }

  async login(email: string, password: string): Promise<AuthResponse> {
    const data = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    if (data.session?.access_token) {
      this.token = data.session.access_token;
      localStorage.setItem('auth_token', this.token);
    }

    return data;
  }

  async getUser(): Promise<{ user: User }> {
    return this.request('/auth/user');
  }

  async logout(): Promise<void> {
    await this.request('/auth/logout', { method: 'POST' });
    this.token = null;
    localStorage.removeItem('auth_token');
  }

  // Payment methods
  async logPaymentForm(data: {
    session_id: string;
    product_name: string;
    amount: number;
    currency?: string;
    otp_verified?: boolean;
    form_completed?: boolean;
  }) {
    return this.request('/payment/log', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async createPayment(data: {
    amount?: number;
    currency?: string;
    productName?: string;
  }) {
    return this.request('/payment/create-payment', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getPaymentLogs() {
    return this.request('/payment/logs');
  }

  // Health check
  async healthCheck() {
    return this.request('/health');
  }

  // Session management
  setToken(token: string) {
    this.token = token;
    localStorage.setItem('auth_token', token);
  }

  getToken(): string | null {
    return this.token;
  }

  clearToken() {
    this.token = null;
    localStorage.removeItem('auth_token');
  }

  // Get current API base URL (useful for debugging)
  getBaseUrl(): string {
    return this.baseUrl;
  }
}

export const apiClient = new ApiClient();
export type { User, Session, AuthResponse };