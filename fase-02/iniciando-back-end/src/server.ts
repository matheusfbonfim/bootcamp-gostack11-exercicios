// Utilizar os decoratos em typeorm - entidades
import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

// Importando as rotas
import routes from './routes';

// Importando base de dados
import './database';

// Importando a rota de upload de arquivos
import uploadConfig from './config/upload';

// Class de erro
import AppError from './errors/AppError';

// =================================================

// Instanciando o express
const app = express();

// Aplicação entender o formato JSON nas requisições
app.use(express.json());

// Rota para mostrar a imagem do avatar ao usuário
app.use('/files', express.static(uploadConfig.directory));

// Define todas as rotas dentro do app
app.use(routes);

// Middleware -> Trativa de erro -> Depois do uso das rotas
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  // Verifica se o erro é gerado por uma instancia da class error
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  // Erro desconhecido
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

// Porta do servidor
app.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
});
