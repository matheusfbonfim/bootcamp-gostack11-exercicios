// Arquivo para separar as rotas
import { Router } from 'express';

// Variavel do tipo rota - Modulo de rota do express
const routes = Router();

routes.get('/', (request, response) => response.json({ message: 'Hello World!!' }));

export default routes;
