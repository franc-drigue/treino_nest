import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CityEntity } from './entities/city.entity';
import { Repository } from 'typeorm';
import { CacheService } from 'src/cache/cache.service';

@Injectable()
export class CityService {
    constructor(
        @InjectRepository(CityEntity)
        private cityRepository: Repository<CityEntity>,
        private readonly cacheService: CacheService
      ) {}

      async getAllCityById(state_id: number): Promise<CityEntity[]>{

        return this.cacheService.getCache<CityEntity[]>(`state_${state_id}`, 
            () => this.cityRepository.find({
                where: {
                    state_id
                }
            })
        )
      }
}
