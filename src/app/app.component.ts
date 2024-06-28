import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectorsDemoComponent } from './01_selectors-demo/selectors-demo/selectors-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SelectorsDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'learning-angular17';
}
