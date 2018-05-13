import { Directive, HostListener, Input } from '@angular/core';

/* tslint:disable:directive-selector no-input-rename */
@Directive({
  selector: '[routerLink]',
})
export class RouterLinkStubDirective {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  @HostListener('click') onClick() {
    this.navigatedTo = this.linkParams;
  }
}
