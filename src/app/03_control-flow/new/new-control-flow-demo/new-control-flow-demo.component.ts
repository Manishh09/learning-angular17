import { Component, inject } from '@angular/core';
import { UserListComponent } from "../user-list/user-list.component";
import { PostsComponent } from "../posts/posts.component";
import { AsyncPipe, CommonModule, JsonPipe, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { forkJoin, of } from 'rxjs';
import { NgModel } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-control-flow-demo',
  standalone: true,
  imports: [UserListComponent, PostsComponent, AsyncPipe, MatFormFieldModule, MatInputModule],
  templateUrl: './new-control-flow-demo.component.html',
  styleUrl: './new-control-flow-demo.component.scss'
})
export class NewControlFlowDemoComponent {
  type = 'posts | users'
  onChange($event: any) {
    this.type = $event.target.value

  }




  #ds = inject(DataService);

  data$ = forkJoin({ type: of(['posts', 'users']), users: this.#ds.getUserGen(), posts: this.#ds.getPosts() })
}
