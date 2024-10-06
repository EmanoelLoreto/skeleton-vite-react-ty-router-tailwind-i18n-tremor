import api from '@/services/api';

export const userService = {
  getProfile: () => api.get('/user/profile'),
  updateProfile: (data: any) => api.put('/user/profile', data),
  getUsers: (params: any) => api.get('/users', { params }),
};