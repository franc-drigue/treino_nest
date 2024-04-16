import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'bcrypt';
import { CreateUserDto } from 'src/dtos/createUser.dto';
import { UserEntity } from 'src/interfaces/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
      ) {}

    async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {

        const saltOrRounds = 10;
        const passwordHash = await hash(createUserDto.password, saltOrRounds);

        return this.usersRepository.save({
            ...createUserDto,
            password: passwordHash
        })
    }

    async getAllUsers(): Promise<UserEntity[]> {
       return this.usersRepository.find()
    }
}
