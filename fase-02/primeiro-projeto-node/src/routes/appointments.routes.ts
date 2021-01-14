// Importar Router -> Modulo de rotas do express
import { Router } from 'express';
// Importar para criar id's
import { uuid } from 'uuidv4';
// Importar funções da biblioteca de datas e horas
import { startOfHour, parseISO, isEqual } from 'date-fns';

const appointmentsRouter = Router();

// Fazendo o tipo de appointment
interface Appointment {
  id: string;
  provider: string;
  date: Date;
}

// Temporário - array de agendamentos
// Necessário adicionar tipagem para essa variavél
const appointments: Appointment[] = [];

// Não é necessário identificar a rota por completo pois no
// index está sendo indicado
// http://localhost:3333/appointments

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  // parseISO -> converte string em date do JS
  // startOfHour -> Zera minutos e segundos e starta somente a hora
  const parsedDate = startOfHour(parseISO(date));

  const findAppointmentInSameDate = appointments.find((appointment) => {
    return isEqual(parsedDate, appointment.date);
  });

  if (findAppointmentInSameDate) {
    return response
      .status(400)
      .json({ message: 'This appointment is already booked' });
  }

  const appointment = {
    id: uuid(),
    provider,
    date: parsedDate,
  };

  // Adicionando ao dicionário
  appointments.push(appointment);

  return response.json(appointment);
});

export default appointmentsRouter;
