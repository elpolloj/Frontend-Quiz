import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private cache = new Map<string, any>();

  get(url: string): any {
    const cachedData = this.cache.get(url);
    if (cachedData) {
      console.log(`Serving from cache: ${url}`);
    }
    return cachedData;
  }

  set(url: string, data: any): void {
    console.log(`Caching data for: ${url}`);
    this.cache.set(url, data);
  }

  clear(): void {
    this.cache.clear();
  }
}
