import { getRepository } from 'typeorm';
// Importa biblioteca de criptografia de senha
import { hash } from 'bcryptjs';
import User from '../models/User';

// Classe de erro
import AppError from '../errors/AppError';

/**
 * Caso não seja necessário fazer alguma manipulação no banco de dados
 * que não seja as operações mais simples (create, update...), não precisa
 * criar um repositorio para user -> Importa diretamente o getRepository
 */

// Tipagem - Interface de User
interface Request {
  name: string;
  email: string;
  password: string;
}

class createUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    // Função que retorna o repositório e todos seus métodos
    const usersRepository = getRepository(User);

    // Não pode ter email duplicado já registrado no banco
    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new AppError('Email adress already used');
    }

    // Criptografando a senha
    const hashedPassword = await hash(password, 8);

    // Cria usuario -> Não precisa do await pois não salva no banco
    // Cria somente a instância da class usuário
    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    // Salvando no banco
    await usersRepository.save(user);

    return user;
  }
}

export default createUserService;
