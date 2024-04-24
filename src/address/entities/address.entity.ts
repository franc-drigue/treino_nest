import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "address"})
export class AddressEntity {
    @PrimaryGeneratedColumn("rowid")
    id: number;

    @Column({name: "user_id", nullable: false})
    user_id: number;

    @Column({name: "complemens"})
    complements: string;

    @Column({name: "number", nullable: false})
    number_address: number;

    @Column({name: "cep", nullable: false})
    cep: string;

    @Column({name: "city_id", nullable: false})
    city_id: number;

    @CreateDateColumn({name: "created_at"})
    created_at: Date;

    @CreateDateColumn({name: "updated_at"})
    updated_at: Date;
}