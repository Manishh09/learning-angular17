import { Component } from '@angular/core';
import { MouseenterDirective } from '../../directives/mouseenter.directive';

@Component({
  selector: 'app-directive-composition-demo',
  standalone: true,
  imports: [ ],
  templateUrl: './directive-composition-demo.component.html',
  styleUrl: './directive-composition-demo.component.scss',
  hostDirectives: [MouseenterDirective]
})
export class DirectiveCompositionDemoComponent {

}
