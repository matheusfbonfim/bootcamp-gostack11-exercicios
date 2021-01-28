import { getRepository } from 'typeorm';
// Importa biblioteca de criptografia de senha
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import User from '../models/User';

// Tipagem dos parametros
interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

// Autentifica - Regra de negocio - Acesso ao banco por meio de repo.
class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    // Função que retorna o repositório e todos seus métodos
    const usersRepository = getRepository(User);

    // Usuário no banco conforme o email indicado
    const user = await usersRepository.findOne({ where: { email } });

    // Verifica se o usuário foi encontrado
    if (!user) {
      throw new Error('Incorrect email/password combination.');
    }

    // user.password - Senha criptografada
    // password - Senha não criptografada
    // Método que compara a senha cript. e não cript.
    const passwordMatched = await compare(password, user.password);

    // Verifica a senha
    if (!passwordMatched) {
      throw new Error('Incorrect email/password combination.');
    }

    // Não mostrar a senha como resposta
    delete user.password;

    // Usuário autênticado
    const token = sign({}, 'ec0398f5191fa1c5137b246f9b70a9a9', {
      subject: user.id,
      expiresIn: '1d',
    });

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
