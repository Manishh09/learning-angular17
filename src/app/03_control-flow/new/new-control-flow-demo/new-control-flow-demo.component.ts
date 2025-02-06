import { Component, HostListener, inject, input, OnInit } from '@angular/core';
import { UserListComponent } from "../user-list/user-list.component";
import { PostsComponent } from "../posts/posts.component";
import { AsyncPipe, CommonModule, JsonPipe, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { forkJoin, Observable, of } from 'rxjs';
import { NgModel } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { DataService } from '../../data.service';
 import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-control-flow-demo',
  standalone: true,
  imports: [UserListComponent, PostsComponent, AsyncPipe, MatFormFieldModule, MatInputModule],
  templateUrl: './new-control-flow-demo.component.html',
  styleUrl: './new-control-flow-demo.component.scss'
})
export class NewControlFlowDemoComponent implements OnInit { 
 
  id = input.required<string>()
   
  router = inject(Router)
  unSavedChanges = false;
  type = 'posts | users'

  ngOnInit(): void {
      console.log(this.id())
  }
  
  onChange($event: any) {
    this.type = $event.target.value

    this.unSavedChanges = true;

  }

  /**
   * Determines whether the user can navigate away from the current page.
   * 
   * If there are unsaved changes, the user will be prompted with a confirmation dialog.
   * 
   * @returns {boolean} - Returns `true` if the user confirms navigation despite unsaved changes, otherwise `false`.
   */
  canNavigateAway() : boolean {

    if(this.unSavedChanges){
      return confirm("Unsaved Changes !!");
    }   

    return false;
  }

 

  /**
   * Handles the unload event and prompts the user with a confirmation message
   * if there are unsaved changes.
   *
   * @param $event - The event object associated with the unload event.
   */
  @HostListener('window:beforeunload', ['$event'])
  show($event: any): void {
    if(this.unSavedChanges)
      $event.returnValue = 'Are you sure you want to leave this page?';
  }

  goToTraditionalCflowComp() {
    this.router.navigate(['traditional-control-flow'])
  }


  #ds = inject(DataService);

  data$ = forkJoin({ type: of(['posts', 'users']), users: this.#ds.getUserGen(), posts: this.#ds.getPosts() })
}
