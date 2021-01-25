// Importando uma função vindo das datas e horas
// startOfHour -> Zera minutos e segundos e starta somente a hora
import { startOfHour } from 'date-fns';
// Função para indicar o repositório dentro da class do service
import { getCustomRepository } from 'typeorm';
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
  public async execute({ provider, date }: Request): Promise<Appointment> {
    // Função que retorna o repositório e todos seus métodos
    // Indica o repositório appointment
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);

    const appointmentDate = startOfHour(date);

    // Por meio do repositorio, verifica se tem agendamento na mesma data
    const findAppointmentInSameDate = appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw Error('This appointment is already booked');
    }

    // Cria a instância do appointment mas não salva no banco de dados
    // Cria o objeto do agendamento mas não salva
    const appointment = appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });

    // Salvando no banco de dados
    await appointmentsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
