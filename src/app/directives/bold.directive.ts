import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBold]',
  standalone: true,
})
export class BoldDirective {
  constructor(private hostElement: ElementRef<HTMLElement>, private renderer: Renderer2) {}

  @HostBinding('style.border') border : string = ''
  @HostListener('mouseenter')
  onMouseEnter() {
    this.border = '20px solid red'
    this.renderer.setStyle(this.hostElement.nativeElement, 'fontWeight', 'bold');
    //this.hostElement.nativeElement.style.fontWeight = 'bold';
  }
 
   @HostListener('mouseleave')
  onMouseLeave() {
     this.renderer.setStyle(this.hostElement.nativeElement, 'fontWeight', 'normal');
      //this.hostElement.nativeElement.style.fontWeight = 'normal';
  }
}
