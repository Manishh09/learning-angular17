import { Directive } from '@angular/core';
import { BoldDirective } from './bold.directive';
import { UnderlineDirective } from './underline.directive';

@Directive({
  selector: '[appMouseenter]',
  standalone: true,
  hostDirectives: [BoldDirective , UnderlineDirective]
    
  
})
export class MouseenterDirective {
  constructor() {}
}
