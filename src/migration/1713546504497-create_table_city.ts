import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableCity1713546504497 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "city" (
                id SERIAL PRIMARY KEY,
                state_id INTEGER NOT NULL,
                name VARCHAR NOT NULL,
                created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (state_id) REFERENCES "state"(id)
            );

            CREATE SEQUENCE IF NOT EXISTS city_id_seq
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;

            ALTER SEQUENCE city_id_seq OWNED BY "city".id;

            ALTER TABLE ONLY "city" ALTER COLUMN id SET DEFAULT nextval('city_id_seq');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.query(`
            DROP TABLE "city"
        `);
    }

}
