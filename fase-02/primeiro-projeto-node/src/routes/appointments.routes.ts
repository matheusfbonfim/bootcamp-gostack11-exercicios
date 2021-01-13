// Importar Router -> Modulo de rotas do express
import { Router } from 'express';
// Importar para criar id's
import { uuid } from 'uuidv4';

const appointmentsRouter = Router();

// Temporário - array de agendamentos
const appointments = [];

// Não é necessário identificar a rota por completo pois no
// index está sendo indicado
// gttp://localhost:3333/appointments
appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const appointment = {
    id: uuid(),
    provider,
    date,
  };

  console.log(appointment);
  // Adicionando ao dicionário
  appointments.push(appointment);

  return response.json();
});

export default appointmentsRouter;
