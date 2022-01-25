import { UserService } from './../../user.service';
import { Host, NgModule, Optional, Self, SkipSelf } from '@angular/core';
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
  constructor( @Optional() @Self() private userService: UserService,
    @Optional() @SkipSelf() private parentUserService: UserService) {

    if (userService) {
      userService.prefix = 'LazyModule';
      userService.log();
    }

    if (parentUserService) {
      parentUserService.log();
    }
  }
}
