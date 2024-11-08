import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appBold]',
  standalone: true,
})
export class BoldDirective {
  constructor(private hostElement: ElementRef<HTMLElement>) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hostElement.nativeElement.style.fontWeight = 'bold';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hostElement.nativeElement.style.fontWeight = 'normal';
  }
}
