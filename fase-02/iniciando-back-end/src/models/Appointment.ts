// Importando o banco de dados
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

// Criação de um modelo/entidade para o tipo appointment - agendamento
// Importante para ser usado externamente, como o banco de dados e nas rotas
// Cada agendamento é descrito por essa classe
// Uso do entity como decorator para tabela no banco de dados
@Entity('appointments')
class Appointment {
  // Considerado uma chave auto_increment
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // Definida como uma coluna varchar - default
  @Column()
  provider: string;

  @Column('timestamp with time zone')
  date: Date;

  // O typeorm já tem um tipo de variavel para armazenar a data de criação
  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}

export default Appointment;
