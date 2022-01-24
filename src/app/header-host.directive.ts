import { ComponentFactoryResolver, Directive, Injector, Self, SkipSelf, TemplateRef, ViewContainerRef, ViewRef } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserService } from './user.service';

@Directive({
  selector: '[appHeaderHost]',
  providers: [UserService]
})

export class HeaderHostDirective {
	constructor(
		private el: ViewContainerRef,
		private injector: Injector,
		private resolver: ComponentFactoryResolver,
		@Self() private userService: UserService
	) {
		let factory = resolver.resolveComponentFactory(HeaderComponent);
		let componentRef = factory.create(injector);
		let view = componentRef.hostView;
    el.insert(view);

    if (userService) {
      userService.log();
    }

	}

}
