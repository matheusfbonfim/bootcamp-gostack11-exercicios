// Importar Router -> Modulo de rotas do express
import { Router } from 'express';

// Importando o service
// Importando - upload de arquivos
import multer from 'multer';
import uploadConfig from '../config/upload';

import CreateUserService from '../services/CreateUserService';

// Middleware - Autenticação
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

// ==============================================================
// INSTÂNCIAS

const usersRouter = Router();

// Instancia do multer
const upload = multer(uploadConfig); // -> Alguns métodos para fazer o up

// ==============================================================
// ROTAS

// CRIAÇÃO de usuário
// Não precisa de validação para criar o usuário
usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    // Instanciando o service
    const createUser = new CreateUserService();

    // Função assincrona - banco de dados
    const user = await createUser.execute({ name, email, password });

    // Por segurança, excluir a senha do retorno (não afeita o banco)
    delete user.password;

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

// Alteração - imagem avatar
// Precisa validação - autenticação
usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    console.log(request.file);

    return response.json({ ok: 'true' });
  },
);

export default usersRouter;
