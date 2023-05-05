import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
// export class DropdownDirective {

//   @HostBinding('class.open') isOpen : boolean = false;
  
//   constructor(private elRef: ElementRef, private renderer : Renderer2) {
//    }
//   @HostListener('click') toggleDropdown() {
//     // console.log(this.class)
//     // console.log(this.elRef.nativeElement.getAttribute('class'));
//     // // // this.renderer.
//     // if (this.elRef.nativeElement.getAttribute('class').includes('open')) {
//     //   this.renderer.removeClass(this.elRef.nativeElement, 'open');
//     // } else {
//     //   this.renderer.addClass(this.elRef.nativeElement, 'open');
//     // }
//     this.isOpen = !this.isOpen;
//   }
// }

export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}
