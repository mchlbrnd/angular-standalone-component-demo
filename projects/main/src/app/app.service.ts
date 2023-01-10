import { Injectable } from '@angular/core';

// don't inject at root level but let components decide
@Injectable()
export class AppService {
  public prop!: string;
  constructor() { }
}
