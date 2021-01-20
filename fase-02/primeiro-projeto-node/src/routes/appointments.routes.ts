// Importar Router -> Modulo de rotas do express
import { Router } from 'express';
// Importar funções da biblioteca de datas e horas
// parseISO -> converte string em date do JS
import { parseISO } from 'date-fns';

// Importando o repositório de appointment
import AppointmentsRepository from '../repositories/AppointmentsRepository';

// Importações de Services
import CreateAppointmentService from '../services/CreateAppointmentService';

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

// LISTAR todos os agendamentos
appointmentsRouter.get('/', (request, response) => {
  const appointments = appointmentsRepository.all();

  return response.json(appointments);
});

// CRIAÇÃO de agendamento
appointmentsRouter.post('/', (request, response) => {
  try {
    const { provider, date } = request.body;

    const parsedDate = parseISO(date);

    // Instância o serviço a ser chamado, com o repositório (database e manipulações)
    const createAppointment = new CreateAppointmentService(
      appointmentsRepository,
    );

    const appointment = createAppointment.execute({
      provider,
      date: parsedDate,
    });

    return response.json(appointment);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default appointmentsRouter;
