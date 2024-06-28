import { Routes } from '@angular/router';
import { SelectorsDemoComponent } from './01_selectors-demo/selectors-demo/selectors-demo.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'selectors-demo',
        component: SelectorsDemoComponent
    }
];
