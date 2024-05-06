import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CityEntity } from './entities/city.entity';
import { Repository } from 'typeorm';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class CityService {
    constructor(
        @InjectRepository(CityEntity)
        private cityRepository: Repository<CityEntity>,
        @Inject(CACHE_MANAGER) private cacheManager: Cache
      ) {}

      async getAllCityById(state_id: number): Promise<CityEntity[]>{
        const citeCache: CityEntity[] = await this.cacheManager.get(
           `state_${state_id}`
        );

        if(citeCache){
            return citeCache
        }

        const cites = await this.cityRepository.find({
            where: {
                state_id,
            }
        })

        await this.cacheManager.set(`state_${state_id}`, cites);

        return cites;
      }
}
