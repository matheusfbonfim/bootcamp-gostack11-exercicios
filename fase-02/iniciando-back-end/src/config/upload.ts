// Uso do middleware multer -> Lida com uploads de arquivos
import multer from 'multer';
// Caminho
import path from 'path';
// Criptografia - criar hash
import crypto from 'crypto';

export default {
  // Armazenar no momento os uploads no próprio disco da máquina
  storage: multer.diskStorage({
    // onde será armazenado os arquivos de upload
    destination: path.resolve(__dirname, '..', '..', 'tmp'),
    // Nome que o arquivo irá receber -> Garantir nomes unicos
    filename(request, file, callback) {
      // Nome atraves da hash
      const fileHash = crypto.randomBytes(10).toString('HEX');
      // Nome vindo da maquina do user
      const fileName = `${fileHash} - ${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
