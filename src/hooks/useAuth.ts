import { useState, useEffect } from 'react';
import { authService } from '@/services/authService';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await authService.refreshToken();
        setUser(response.data.user);
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (credentials: any) => {
    // Implementação do login
  };

  const logout = async () => {
    // Implementação do logout
  };

  return { user, loading, login, logout };
}

export default useAuth;