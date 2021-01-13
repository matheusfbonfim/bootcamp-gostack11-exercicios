// Importar
import { Router } from 'express';

const appointmentsRouter = Router();

// Temporário - array de agendamentos
const appointments = [];

// Não é necessário identificar a rota por completo pois no
// index está sendo indicado
// gttp://localhost:3333/appointments
appointmentsRouter.post('/', (request, response) => {
  return response.json({ message: 'Hello World!' });
});

appointmentsRouter.get('/', (request, response) => {
  return response.json({ message: 'Hello World!' });
});

export default appointmentsRouter;
