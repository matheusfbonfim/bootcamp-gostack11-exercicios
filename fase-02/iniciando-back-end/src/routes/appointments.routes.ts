// Importar Router -> Modulo de rotas do express
import { Router } from 'express';
// Importar funções da biblioteca de datas e horas
// parseISO -> converte string em date do JS
import { parseISO } from 'date-fns';

// Importando funções para acesso ao repositorio - database
import { getCustomRepository } from 'typeorm';

// Importando o repositório de appointment
import AppointmentsRepository from '../repositories/AppointmentsRepository';

// Importações de Services
import CreateAppointmentService from '../services/CreateAppointmentService';

// ==============================================================
// INSTÂNCIAS

const appointmentsRouter = Router();

// ==============================================================
// ROTAS

// Não é necessário identificar a rota por completo pois no
// index está sendo indicado
// http://localhost:3333/appointments

// LISTAR todos os agendamentos
appointmentsRouter.get('/', async (request, response) => {
  // Inicializa/acesso ao repositórito que será utilizado
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);

  // Busca todos os dados - find - direto de typeorm
  const appointments = await appointmentsRepository.find();

  return response.json(appointments);
});

// CRIAÇÃO de agendamento
appointmentsRouter.post('/', async (request, response) => {
  try {
    const { provider_id, date } = request.body;

    const parsedDate = parseISO(date);

    // Instância o serviço a ser chamado
    // No service existe o acesso ao repositório (database e manipulações)
    const createAppointment = new CreateAppointmentService();

    const appointment = await createAppointment.execute({
      provider_id,
      date: parsedDate,
    });
    
    return response.json(appointment);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default appointmentsRouter;
