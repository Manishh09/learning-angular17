import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appUnderline]',
  standalone: true,
})
export class UnderlineDirective {

  constructor(private hostElement: ElementRef<HTMLElement>, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.renderer.setStyle(this.hostElement.nativeElement, 'textDecoration', 'underline dotted')
    // this.hostElement.nativeElement.style.textDecoration = 'underline dotted';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.setStyle(this.hostElement.nativeElement, 'textDecoration', 'none')

    // this.hostElement.nativeElement.style.textDecoration = 'none';
    // this.hostElement.nativeElement.style.textDecorationColor = 'none';
  }
}
