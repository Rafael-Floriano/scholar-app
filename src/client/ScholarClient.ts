import axios from 'axios';

const API_BASE_URL = 'https://tc03xmvh-5165.brs.devtunnels.ms';

const scholarClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const cadastrarUsuario = async (userData: any) => {
  try {
    const response = await scholarClient.post('/user', userData);
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar o usuário:', error);
    throw error;
  }
};

export default scholarClient;
