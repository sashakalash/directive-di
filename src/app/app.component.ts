import { Component, Self } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService]
})
export class AppComponent {
  constructor(@Self() private userService: UserService) {
    userService.prefix = 'AppComponent';
    userService.log();
}
}
