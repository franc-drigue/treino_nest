import { UserEntity } from "src/user/entities/user.entity";

export class ReturnUserDto {
    id: number;
    name: string;
    email: string;
    phone: string;
    cpf: string;

    constructor(userEntity: UserEntity){
         this.id = userEntity.id
         this.name = userEntity.name
         this.email = userEntity.phone
         this.cpf = userEntity.cpf
    }
}