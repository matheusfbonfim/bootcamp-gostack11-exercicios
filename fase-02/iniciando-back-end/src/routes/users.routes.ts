// Importar Router -> Modulo de rotas do express
import { Router } from 'express';

// Importando o service
import CreateUserService from '../services/CreateUserService';

// ==============================================================
// INSTÂNCIAS

const usersRouter = Router();

// ==============================================================
// ROTAS

// CRIAÇÃO de agendamento
usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    // Instanciando o service
    const createUser = new CreateUserService();

    // Função assincrona - banco de dados
    const user = await createUser.execute({ name, email, password });

    return response.json(user);

  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRouter;
