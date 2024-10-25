import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-list-traditional-cf',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './user-list-traditional-cf.component.html',
  styleUrl: './user-list-traditional-cf.component.scss'
})
export class UserListTraditionalCfComponent {
  @Input() users: any = []
}
