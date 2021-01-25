// Importando métodos para relacionamento com o banco de dados
import { EntityRepository, Repository } from 'typeorm';
// Importa métodos de dates
import Appointment from '../models/Appointment';

// ==================================================

// Classe - Repositório de agendamentos
@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
  // Procurar elemento pela Date e indica a existência ou não
  public async findByDate(date: Date): Promise<Appointment | null> {
    // const findAppointment = this.appointments.find((appointment) => {
    //   return isEqual(date, appointment.date);
    // });
    const findAppointment = await this.findOne({
      where: { date },
    });

    return findAppointment || null;
  }
}

export default AppointmentsRepository;
