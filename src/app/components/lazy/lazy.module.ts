import { UserService } from './../../user.service';
import { NgModule, Self } from '@angular/core';
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
  constructor(@Self() userService: UserService) {

    if (userService) {
      userService.log();
    }
  }
}
