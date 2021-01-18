// Importando o criador de id's
import { uuid } from 'uuidv4';

// // Interface do parametro do construtor
// interface AppointmentConstructor {
//   provider: string;
//   date: Date;
// }

// Criação de um modelo/entidade para o tipo appointment - agendamento
// Importante para ser usado externamento, como o banco de dados e nas rotas
// Cada agendamento é descrito por essa classe
class Appointment {
  id: string;

  provider: string;

  date: Date;

  // Omit -> Cria uma tipagem com todas propriedades da class, - id
  constructor({ provider, date }: Omit<Appointment, 'id'>) {
    this.id = uuid();
    this.provider = provider;
    this.date = date;
  }
}

export default Appointment;
