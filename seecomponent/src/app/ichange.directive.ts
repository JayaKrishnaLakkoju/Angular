import { Directive, ElementRef } from '@angular/core';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';

@Directive({
  selector: '[appIchange]'
})
export class IchangeDirective {
  constructor(el: ElementRef) {
  el.nativeElement.style.backgroundColor = 'yellow';
  el.nativeElement.style.width = '500px';
  el.nativeElement.style.height = '250px';
  el.nativeElement.style.border = 'solid black';
  el.nativeElement.style.color = 'red';
  }
}
