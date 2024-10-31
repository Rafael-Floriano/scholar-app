import axios from 'axios';

const API_BASE_URL = 'https://sua-api.com';

const scholarClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const cadastrarUsuario = async (userData: any) => {
  try {
    const response = await scholarClient.post('/cadastro', userData);
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar o usuário:', error);
    throw error;
  }
};

export default scholarClient;
