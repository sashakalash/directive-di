import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public prefix: string = 'root';

  constructor() {}

  log() {
    console.log('Hello I`m ' + this.prefix);
  }
}
