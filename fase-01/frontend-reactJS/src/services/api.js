import axios from 'axios';

// Criando uma instância do axios
// base_Url -> URL padrão de acesso
const api = axios.create({
  baseURL: "http://localhost:3333"
});

export default api;