// Importar Router -> Modulo de rotas do express
import { Router } from 'express';
// Importar funções da biblioteca de datas e horas
// parseISO -> converte string em date do JS
// startOfHour -> Zera minutos e segundos e starta somente a hora
import { startOfHour, parseISO } from 'date-fns';

// Importando o repositório de appointment
import AppointmentsRepository from '../repositories/AppointmentsRepository';

// ==============================================================
// INSTÂNCIAS

const appointmentsRouter = Router();

// Criando uma instância da class repositorio
// Construtor com array vazio de agendamentos
const appointmentsRepository = new AppointmentsRepository();

// ==============================================================
// ROTAS

// Não é necessário identificar a rota por completo pois no
// index está sendo indicado
// http://localhost:3333/appointments

// Listar todos os agendamentos
appointmentsRouter.get('/', (request, response) => {
  const appointments = appointmentsRepository.all();

  return response.json(appointments);
});

// Rota para criação de agendamento
appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));

  // Por meio do repositorio, verifica se tem agendamento na mesma data
  const findAppointmentInSameDate = appointmentsRepository.findByDate(
    parsedDate,
  );

  if (findAppointmentInSameDate) {
    return response
      .status(400)
      .json({ message: 'This appointment is already booked' });
  }

  const appointment = appointmentsRepository.create(provider, parsedDate);

  return response.json(appointment);
});

export default appointmentsRouter;
