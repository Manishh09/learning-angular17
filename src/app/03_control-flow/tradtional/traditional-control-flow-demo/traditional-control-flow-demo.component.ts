import { Component, inject } from '@angular/core';
import {
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgFor,
  AsyncPipe,
  JsonPipe,
} from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { forkJoin, of } from 'rxjs';
import { DataService } from '../../data.service';
import { UserListTraditionalCfComponent } from '../user-list-traditional-cf/user-list-traditional-cf.component';
import { PostsTraditionalCfComponent } from '../posts-traditional-cf/posts-traditional-cf.component';

@Component({
  selector: 'app-traditional-control-flow-demo',
  standalone: true,
  imports: [
    UserListTraditionalCfComponent,
    PostsTraditionalCfComponent,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './traditional-control-flow-demo.component.html',
  styleUrl: './traditional-control-flow-demo.component.scss',
})
export class TraditionalControlFlowDemoComponent {
  type = 'posts | users';
  onChange($event: any) {
    this.type = $event.target.value;
  }

  #ds = inject(DataService);

  data$ = forkJoin({
    type: of(['posts', 'users']),
    users: this.#ds.getUsers(),
    posts: this.#ds.getPosts(),
  });
}
