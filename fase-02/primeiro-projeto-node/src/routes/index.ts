// Arquivo para separar as rotas
import { Router } from 'express';
// Importart rotas
import appointmentsRouter from './appointments.routes';

// Variavel do tipo rota - Modulo de rota do express
const routes = Router();

// Toda rota que inicie com '/appointments' será repassado para
// dentro de appointmentsRouter
// Independente do método utilizado (POST,GET,DELETE...)
routes.use('/appointments', appointmentsRouter);

export default routes;
