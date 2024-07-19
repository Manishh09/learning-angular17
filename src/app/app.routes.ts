import { Routes } from '@angular/router';
import { SelectorsDemoComponent } from './01_selectors-demo/selectors-demo/selectors-demo.component';
import { HomeComponent } from './home/home.component';
import { VeEmulatedDemoComponent } from './02_view-encapsulation-demo/ve-emulated-demo/ve-emulated-demo.component';
import { VeShadowdomDemoComponent } from './02_view-encapsulation-demo/ve-shadowdom-demo/ve-shadowdom-demo.component';
import { VeNoneDemoComponent } from './02_view-encapsulation-demo/ve-none-demo/ve-none-demo.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'selectors-demo',
        component: SelectorsDemoComponent
    },
    {
        path: 've-emulated',
        component: VeEmulatedDemoComponent
    },
    {
        path: 've-shadowdom',
        component: VeShadowdomDemoComponent
    },
    {
        path: 've-none',
        component: VeNoneDemoComponent
    }
];
