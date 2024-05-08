import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheService {
    constructor(
        @Inject(CACHE_MANAGER) private cacheCity: Cache
      ) {}

      async getCache<T>(key: string, functionRequest: () => Promise <T>): Promise<T>{
        const citeCache: T = await this.cacheCity.get(key);

        if(citeCache){
            return citeCache
        }

        const cites = await functionRequest();

        await this.cacheCity.set(key, cites);

        return cites;
      }
}
