import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import {MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconButton, MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  mode = 'light';
  toggleTheme() {

    const isDarkMode = document.documentElement.hasAttribute('data-dark-mode');

    if(isDarkMode) {     
      // remove dark theme
      document.documentElement.removeAttribute('data-dark-mode');
      this.mode = 'light';
    } else {
      // set dark theme      
      document.documentElement.toggleAttribute('data-dark-mode');
      this.mode = 'dark';
    }
  }
   

}
