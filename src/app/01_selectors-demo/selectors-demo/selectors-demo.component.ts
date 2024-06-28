import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-selectors-demo, [app-selectors-demo], .class-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selectors-demo.component.html',
  styleUrl: './selectors-demo.component.scss'
})
export class SelectorsDemoComponent {

}
