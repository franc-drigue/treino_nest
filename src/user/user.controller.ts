import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/createUser.dto';
import { UserService } from './user.service';
import { UserEntity } from 'src/interfaces/user.entity';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post()
    async createUsers(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
        return this.userService.createUser(createUserDto);
    }

    @Get()
    async getAllUsers(): Promise<UserEntity[]> {
       return this.userService.getAllUsers();
    }
}
