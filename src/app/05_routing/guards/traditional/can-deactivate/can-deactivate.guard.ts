import { ActivatedRouteSnapshot, CanDeactivate, CanDeactivateFn, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { NewControlFlowDemoComponent } from '../../../../03_control-flow/new/new-control-flow-demo/new-control-flow-demo.component';
import { Injectable } from '@angular/core';

// export const canDeactivateGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
//     return true;
// };

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<NewControlFlowDemoComponent> {
   

  canDeactivate(
    component: NewControlFlowDemoComponent,
    currentState: ActivatedRouteSnapshot,
    nextState: RouterStateSnapshot
  ):  boolean | Observable<boolean> {
    
    return component.canNavigateAway();  
  }

}

// export interface CanComponentDeactivate {
//   canNavigateAway : () => boolean | Observable<boolean>
// }




