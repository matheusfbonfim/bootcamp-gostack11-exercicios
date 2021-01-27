/* eslint-disable camelcase */
// Importando o banco de dados
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

// Importa model de user -> Relacionamento (chave estrangeira)
import User from './User';

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
  provider_id: string;

  // Relacionamento com a table User
  // Muitos agendamentos para um prestador de serviço
  @ManyToOne(() => User) // Função que retorna qual o model quando a variavel abaixo for chamada
  @JoinColumn({ name: 'provider_id' }) // Coluna que identifica o prestador do agendamento
  provider: User; // Propriedade -> Tipo - instancia da class User

  @Column('timestamp with time zone')
  date: Date;

  // O typeorm já tem um tipo de variavel para armazenar a data de criação
  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}

export default Appointment;
