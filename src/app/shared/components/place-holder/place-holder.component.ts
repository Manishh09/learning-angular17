import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-place-holder',
  standalone: true,
  imports: [MatProgressSpinnerModule, MatIconModule],
  templateUrl: './place-holder.component.html',
  styleUrl: './place-holder.component.scss'
})
export class PlaceHolderComponent {
  loading = input<boolean>(false);
}
