// Importar Router -> Modulo de rotas do express
import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

// ==============================================================
// INSTÂNCIAS

const sessionsRouter = Router();

// ==============================================================
// ROTAS

// CRIAÇÃO de autenticação
sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticatedUser = new AuthenticateUserService();

  const { user, token } = await authenticatedUser.execute({
    email,
    password,
  });

  // Regra de negócio - Service
  return response.json({ user, token });
});

export default sessionsRouter;
