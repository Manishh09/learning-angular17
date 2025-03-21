import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  
})
export class UserListComponent {
//@Input() users: any = [];

  users = input<any>();


}
