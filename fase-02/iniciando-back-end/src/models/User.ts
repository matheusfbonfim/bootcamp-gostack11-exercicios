// Importando o banco de dados
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

// Criação de um modelo/entidade para o tipo appointment - user
// Importante para ser usado externamente, como o banco de dados e nas rotas
// Cada user é descrito por essa classe
// Uso do entity como decorator para tabela no banco de dados
@Entity('users')
class User {
  // Considerado uma chave auto_increment -> uuid
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // Definida como uma coluna varchar - default
  @Column()
  name: string;

  // Definida como uma coluna varchar - default
  @Column()
  email: string;

  @Column()
  password: string;

  // O typeorm já tem um tipo de variavel para armazenar a data de criação
  @CreateDateColumn()
  // eslint-disable-next-line camelcase
  create_at: Date;

  @UpdateDateColumn()
  // eslint-disable-next-line camelcase
  update_at: Date;
}

export default User;
