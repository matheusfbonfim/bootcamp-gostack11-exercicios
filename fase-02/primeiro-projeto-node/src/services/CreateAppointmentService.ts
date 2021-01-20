// Importando uma função vindo das datas e horas
// startOfHour -> Zera minutos e segundos e starta somente a hora
import { startOfHour } from 'date-fns';
import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

/**
 * Recebimento das informações
 * Tratativa de erros/excessões
 * Acesso ao repositório
 */

// Tipagem para os parametros DTO
interface Request {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  // Variavel que será usada como repositorio de agendamentos
  // Teremos acesso ao database e seus métodos
  private appointmentsRepository: AppointmentsRepository;

  constructor(appointmentsRepository: AppointmentsRepository) {
    this.appointmentsRepository = appointmentsRepository;
  }

  public execute({ provider, date }: Request): Appointment {
    const appointmentDate = startOfHour(date);

    // Por meio do repositorio, verifica se tem agendamento na mesma data
    const findAppointmentInSameDate = this.appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw Error('This appointment is already booked');
    }

    const appointment = this.appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
