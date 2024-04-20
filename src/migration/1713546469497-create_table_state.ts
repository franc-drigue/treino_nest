import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableState1713546469497 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "state" (
                id SERIAL PRIMARY KEY,
                name VARCHAR NOT NULL,
                created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );

            CREATE SEQUENCE IF NOT EXISTS state_id_seq
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;

            
            ALTER SEQUENCE state_id_seq OWNED BY "state".id;

            ALTER TABLE ONLY "state" ALTER COLUMN id SET DEFAULT nextval('state_id_seq');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.query(`
            DROP TABLE "state"
        `);
    }

}
