export class UserService {

  public prefix: string = 'root';

  constructor() {}

  log() {
    console.log('Hello I`m ' + this.prefix);
  }
}
