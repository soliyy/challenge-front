import axios from 'axios';

const isProduction = import.meta.env.MODE === 'production';

const api = axios.create({
  baseURL: isProduction ? '' : 'http://localhost:8080/api', // URL para desenvolvimento ou vazio em produção(mock), exemplo de local host
});

export interface Endereco {
  id?: number; 
  rua: string;
  cidade: string;
  estado: string;
}

const mockData: Endereco[] = [
  { id: 1, rua: "Rua Exemplo 1", cidade: "Cidade A", estado: "Estado A" },
  { id: 2, rua: "Rua Exemplo 2", cidade: "Cidade B", estado: "Estado B" },
];

export const getEnderecos = async (): Promise<Endereco[]> => {
  if (isProduction) {
    return mockData;
  }
  const response = await api.get<Endereco[]>('/enderecos');
  return response.data;
};

export const addEndereco = async (endereco: Endereco): Promise<Endereco> => {
  if (isProduction) {
    console.log('Mock addEndereco:', endereco);
    return { ...endereco, id: Math.floor(Math.random() * 1000) };
  }
  const response = await api.post('/enderecos', endereco);
  return response.data;
};

export const deleteEndereco = async (id: number): Promise<{ success: boolean }> => {
  if (isProduction) {
    console.log('Mock deleteEndereco:', id);
    return { success: true };
  }
  const response = await api.delete(`/enderecos/${id}`);
  return response.data;
};
