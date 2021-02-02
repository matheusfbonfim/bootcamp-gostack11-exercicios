import { getRepository } from 'typeorm';
import path from 'path';
// Importando do file system do node
import fs from 'fs';

import User from '../models/User';

// Contem o caminho até a pasta de imagens - tmp
import uploadConfig from '../config/upload';

// ==========================================================

interface Request {
  user_id: string;
  avatarFilename: string;
}

class UpdateUserAvatarService {
  public async execute({ user_id, avatarFilename }: Request): Promise<User> {
    // Acesso direto ao repositorio - banco de dados
    const usersRepository = getRepository(User);

    // User ou undefined caso nao encontre
    // A instancia do usuario
    const user = await usersRepository.findOne(user_id);

    // REGRAS DE NEGÓCIO

    // Verifica se o id está no banco
    if (!user) {
      throw new Error('Only authenticated users can change avatar.');
    }

    // Verifica se antes da atualização se já tinha avatar - imagem
    if (user.avatar) {
      // Junção - diretorio e arquivo do diretorio
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);

      // Garante que estára usando as funções em formato de promises
      // função stat -> status de um arquivo porem só se ele existir
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      // Verifica se o arquivo existe
      if (userAvatarFileExists) {
        // Deletar avatar anterior
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    // Novo valor do campo
    user.avatar = avatarFilename;

    // Salva um novo ou atualiza o usuário
    await usersRepository.save(user);

    return user;
  }
}

export default UpdateUserAvatarService;
