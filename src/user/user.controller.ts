import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/createUser.dto';
import { UserService } from './user.service';
import { UserEntity } from 'src/user/entities/user.entity';
import { ReturnUserDto } from 'src/dtos/returnUser.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}
    
    @UsePipes(ValidationPipe)
    @Post()
    async createUsers(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
        return this.userService.createUser(createUserDto);
    }

    @Get()
    async getAllUsers(): Promise<ReturnUserDto[]> {
       return (await this.userService.getAllUsers()).map(
        (userEntity) => new ReturnUserDto(userEntity)
    );
    }
}
