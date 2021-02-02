// Utilizar os decoratos em typeorm - entidades
import 'reflect-metadata';

import express from 'express';
// Importando as rotas
import routes from './routes';

// Importando base de dados
import './database';

// Importando a rota de upload de arquivos
import uploadConfig from './config/upload';

// =================================================

// Instanciando o express
const app = express();

// Aplicação entender o formato JSON nas requisições
app.use(express.json());

// Rota para mostrar a imagem do avatar ao usuário
app.use('/files', express.static(uploadConfig.directory));

// Define todas as rotas dentro do app
app.use(routes);

// Porta do servidor
app.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
});
