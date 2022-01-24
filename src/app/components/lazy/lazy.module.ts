import { UserService } from './../../user.service';
import { Host, NgModule, Self, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy/lazy.component';


@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
  ],
  providers: [UserService],
  bootstrap: [LazyComponent]
})
export class LazyModule {
  constructor(@Self() private userService: UserService) {

    if (userService) {
      userService.prefix = 'LazyModule';
      userService.log();
    }
  }
}
