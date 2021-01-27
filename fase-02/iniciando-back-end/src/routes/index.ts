// Arquivo para separar as rotas
import { Router } from 'express';
// Importar rotas
import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';

// Variavel do tipo rota - Modulo de rota do express
const routes = Router();

// Toda rota que inicie com '/appointments' será repassado para dentro de appointmentsRouter
// Independente do método utilizado (POST,GET,DELETE...)
routes.use('/appointments', appointmentsRouter);

routes.use('/users', usersRouter);

export default routes;
