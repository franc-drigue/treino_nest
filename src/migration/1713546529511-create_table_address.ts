import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableAddress1713546529511 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "address" (
                id SERIAL PRIMARY KEY,
                user_id INTEGER NOT NULL,
                complements VARCHAR NOT NULL,
                number INTEGER NOT NULL,
                cep VARCHAR NOT NULL,
                city_id INTEGER NOT NULL,
                created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES "user"(id),
                FOREIGN KEY (city_id) REFERENCES "city"(id)
            );

            CREATE SEQUENCE IF NOT EXISTS address_id_seq
                AS INTEGER
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;

            ALTER SEQUENCE address_id_seq OWNED BY "address".id;

            ALTER TABLE ONLY "address" ALTER COLUMN id SET DEFAULT nextval('address_id_seq');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.query(`
            DROP TABLE "address"        
        `);
    }

}
