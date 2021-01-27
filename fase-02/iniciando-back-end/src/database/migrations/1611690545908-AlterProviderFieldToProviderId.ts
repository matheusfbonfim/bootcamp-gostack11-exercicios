import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

// Excluir o campo provider e trocar por provider_id
// provider_id tem referência com id de user (chave estrangeira)
export default class AlterProviderFieldToProviderId1611690545908
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Apaga a coluna provider
    await queryRunner.dropColumn('appointments', 'provider');
    // Adicionando uma nova coluna -> provider_id
    await queryRunner.addColumn(
      'appointments',
      new TableColumn({
        name: 'provider_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    // Criando uma chave estrangeira
    await queryRunner.createForeignKey(
      'appointments',
      new TableForeignKey({
        // Name para delete
        name: 'AppointmentProvider',
        // Coluna que vai receber a chave estrangeira
        columnNames: ['provider_id'],
        // Nome da coluna, na tabela de usuario que representa o provider_id
        referencedColumnNames: ['id'],
        // Nome da tabela que irá fazer referência com esse campo
        referencedTableName: 'users',
        // O que acontece caso o usuário seja deletado
        onDelete: 'SET NULL',
        // Se o id for alterado, a alterações irá refletir nos relacionamentos
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Fazer exatamente o reverso do createForeignKey

    // Deleta a foreign key -> pelo nome
    await queryRunner.dropForeignKey('appointments', 'AppointmentProvider');

    await queryRunner.dropColumn('appointments', 'provider_id');

    await queryRunner.addColumn(
      'appointments',
      new TableColumn({
        name: 'provider',
        type: 'varchar',
      }),
    );
  }
}
