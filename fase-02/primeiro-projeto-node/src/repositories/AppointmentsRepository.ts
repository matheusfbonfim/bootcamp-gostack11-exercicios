// Importa o tipo/modelo/entidade de agendamento
import { isEqual } from 'date-fns';
// Importa métodos de dates
import Appointment from '../models/Appointment';

// Classe - Repositório de agendamentos
class AppointmentsRepository {
  // Variavel privada - acesso excluso da class - Array de class de agendamentos
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  // Procurar elemento pela Date e indica a existência ou não
  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appointments.find((appointment) => {
      return isEqual(date, appointment.date);
    });

    return findAppointment || null;
  }

  // Método - Criação do agendamento
  public create(provider: string, date: Date): Appointment {
    // Criação de uma nova entidade de agendamento
    const appointment = new Appointment(provider, date);

    // Insere o agendamento no array
    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
