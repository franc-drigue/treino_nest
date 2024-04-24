import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "state"})
export class StateEntity {
    @PrimaryGeneratedColumn("rowid")
    id: number;

    @Column({name: "name"})
    name: string;

    @CreateDateColumn({name: "created_at"})
    created_at: Date;

    @CreateDateColumn({name: "updated_at"})
    updated_at: Date;
}