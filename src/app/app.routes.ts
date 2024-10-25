import { Routes } from '@angular/router';
import { SelectorsDemoComponent } from './01_selectors-demo/selectors-demo/selectors-demo.component';
import { HomeComponent } from './home/home.component';
import { VeEmulatedDemoComponent } from './02_view-encapsulation-demo/ve-emulated-demo/ve-emulated-demo.component';
import { VeShadowdomDemoComponent } from './02_view-encapsulation-demo/ve-shadowdom-demo/ve-shadowdom-demo.component';
import { VeNoneDemoComponent } from './02_view-encapsulation-demo/ve-none-demo/ve-none-demo.component';
import { LoginComponent } from './login/login.component';
import { NewControlFlowDemoComponent } from './03_control-flow/new/new-control-flow-demo/new-control-flow-demo.component';
import { TraditionalControlFlowDemoComponent } from './03_control-flow/tradtional/traditional-control-flow-demo/traditional-control-flow-demo.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
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
    },
    {
        path: 'traditional-control-flow',
        component: TraditionalControlFlowDemoComponent
    },
    {
        path: 'new-control-flow',
        component: NewControlFlowDemoComponent
    },
    {
        path: 'defer-block',
        //component:  DeferWhenDemoComponent
        loadComponent: ()=> import('./04_deferred-loading/defer-when-demo/defer-when-demo.component').then(c => c.DeferWhenDemoComponent)

    }

];
