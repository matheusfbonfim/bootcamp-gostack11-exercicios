import express from 'express';
// Importando as rotas
import routes from './routes';

// Importando base de dados
import './database';

// Instanciando o express
const app = express();

// Aplicação entender o formato JSON nas requisições
app.use(express.json());

// Define todas as rotas dentro do app
app.use(routes);

// Porta do servidor
app.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
});
