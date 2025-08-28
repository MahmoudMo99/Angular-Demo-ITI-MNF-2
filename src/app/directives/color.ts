import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class Color {
  constructor(private el: ElementRef) {}

  // when mouse hover on element
  @HostListener('mouseover') onMouseover() {
    this.el.nativeElement.style.background = 'green';
    console.log(this.el);
    console.log(this.el.nativeElement);
  }

  // when mouse out on element
  @HostListener('mouseleave') onMouseOut() {
    this.el.nativeElement.style.background = 'black';
  }
}
