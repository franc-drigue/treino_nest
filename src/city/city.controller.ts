import { Controller, Get, Param } from '@nestjs/common';
import { CityService } from './city.service';
import { CityEntity } from './entities/city.entity';

@Controller('city')
export class CityController {
    constructor(private readonly cityService: CityService){}

    @Get("/:stateId")
    async getAllCityById(@Param("stateId") state_id: number): Promise<CityEntity[]>{
       return this.cityService.getAllCityById(state_id)
    }
}
