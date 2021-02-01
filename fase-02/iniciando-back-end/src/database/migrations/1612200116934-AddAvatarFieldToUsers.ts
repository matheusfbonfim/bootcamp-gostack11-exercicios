import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddAvatarFieldToUsers1612200116934
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Uso do queryRunner para modificações
    // Por padrão ele deve ir nula, senão dará erro
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'avatar',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'avatar');
  }
}
