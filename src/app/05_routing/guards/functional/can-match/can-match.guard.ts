import { CanMatchFn } from '@angular/router';

export const canMatchGuard: CanMatchFn = (route, segments) => {

  console.log('canMatchGuard', route)

  

  return true;
};
