// Importar Router -> Modulo de rotas do express
import { Router } from 'express';
// Importar funções da biblioteca de datas e horas
// parseISO -> converte string em date do JS
// startOfHour -> Zera minutos e segundos e starta somente a hora
import { startOfHour, parseISO, isEqual } from 'date-fns';
// Importando o modelo/entidade de appointment
import Appointment from '../models/Appointment';

// ==============================================================

const appointmentsRouter = Router();

// Temporário - array de agendamentos
// Necessário adicionar tipagem para essa variavél -> class
const appointments: Appointment[] = [];

// Não é necessário identificar a rota por completo pois no
// index está sendo indicado
// http://localhost:3333/appointments

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));

  const findAppointmentInSameDate = appointments.find((appointment) => {
    return isEqual(parsedDate, appointment.date);
  });

  if (findAppointmentInSameDate) {
    return response
      .status(400)
      .json({ message: 'This appointment is already booked' });
  }

  // Criação de uma nova entidade de agendamento
  const appointment = new Appointment(provider, parsedDate);

  // Adicionando ao dicionário
  appointments.push(appointment);

  return response.json(appointment);
});

export default appointmentsRouter;
