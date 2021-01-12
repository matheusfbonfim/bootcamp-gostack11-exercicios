// Arquivo para separar as rotas
import { Router } from 'express';

// Variavel do tipo rota - Modulo de rota do express
const routes = Router();

routes.post('/users', (request, response) => {
  const { name, email } = request.body;

  const user = {
    name,
    email,
  };

  return response.json(user);
});

export default routes;
