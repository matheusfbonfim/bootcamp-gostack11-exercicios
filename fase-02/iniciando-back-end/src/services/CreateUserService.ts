import { getRepository } from 'typeorm';
import User from '../models/User';

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
      throw new Error('Email adress already used');
    }

    // Cria usuario -> Não precisa do await pois não salva no banco
    // Cria somente a instância da class usuário
    const user = usersRepository.create({
      name,
      email,
      password,
    });

    // Salvando no banco
    await usersRepository.save(user);

    return user;
  }
}

export default createUserService;
