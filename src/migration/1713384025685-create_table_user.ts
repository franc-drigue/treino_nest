import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTableUser1620490188664 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "user" (
                id SERIAL PRIMARY KEY,
                name VARCHAR NOT NULL,
                email VARCHAR NOT NULL,
                cpf VARCHAR NOT NULL,
                type_user INT NOT NULL,
                phone VARCHAR NOT NULL,
                password VARCHAR NOT NULL,
                created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );

            CREATE SEQUENCE IF NOT EXISTS user_id_seq
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;

            ALTER SEQUENCE user_id_seq OWNED BY "user".id;

            ALTER TABLE "user" ALTER COLUMN id SET DEFAULT nextval('user_id_seq');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
