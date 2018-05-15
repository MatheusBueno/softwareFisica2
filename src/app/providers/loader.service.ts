import { Injectable } from '@angular/core';

@Injectable()
export class LoaderService {

  constructor() { }

  // Return inverse value of loader
  loader(loader: boolean, timer: number): Promise<boolean> {
    return new Promise(resolve => setTimeout(() => resolve(!loader), timer));
  }

}
