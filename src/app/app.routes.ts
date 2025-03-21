import { Routes } from '@angular/router';
import { SelectorsDemoComponent } from './01_selectors-demo/selectors-demo/selectors-demo.component';
import { HomeComponent } from './home/home.component';
import { VeEmulatedDemoComponent } from './02_view-encapsulation-demo/ve-emulated-demo/ve-emulated-demo.component';
import { VeShadowdomDemoComponent } from './02_view-encapsulation-demo/ve-shadowdom-demo/ve-shadowdom-demo.component';
import { VeNoneDemoComponent } from './02_view-encapsulation-demo/ve-none-demo/ve-none-demo.component';
import { LoginComponent } from './login/login.component';
import { NewControlFlowDemoComponent } from './03_control-flow/new/new-control-flow-demo/new-control-flow-demo.component';
import { TraditionalControlFlowDemoComponent } from './03_control-flow/tradtional/traditional-control-flow-demo/traditional-control-flow-demo.component';
import { DirectiveCompositionDemoComponent } from './06_composition-apis/directive-composition-demo/directive-composition-demo.component';
import { CanDeactivateGuard } from './05_routing/guards/traditional/can-deactivate/can-deactivate.guard';
import { YouTubeVideoComponent } from './04_deferred-loading/youtube-player/youtube-video.component';
import { OnViewportDemoComponent } from './04_deferred-loading/triggers/on-viewport-demo/on-viewport-demo.component';
import { OnTimerDemoComponent } from './04_deferred-loading/triggers/on-timer-demo/on-timer-demo.component';
import { OnInteractionDemoComponent } from './04_deferred-loading/triggers/on-interaction-demo/on-interaction-demo.component';
import { OnHoverDemoComponent } from './04_deferred-loading/triggers/on-hover-demo/on-hover-demo.component';
import { DeferWhenDemoComponent } from './04_deferred-loading/triggers/defer-when-demo/defer-when-demo.component';
import { DeferredLoadingDemoComponent } from './04_deferred-loading/deferred-loading-demo.component';
 
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
        loadComponent : () => import('./02_view-encapsulation-demo/ve-emulated-demo/ve-emulated-demo.component')
            .then(c => c.VeEmulatedDemoComponent)
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
        component: NewControlFlowDemoComponent,
        //canDeactivate: [CanDeactivateGuard],
    },

    {
        path: 'directive-composition',
        component: DirectiveCompositionDemoComponent
    },
    {
        path: 'defer',
        children: [
            {
                path: '',
                component: DeferredLoadingDemoComponent
            },
            {
                path: 'on-viewport',
                loadComponent: () => import('./04_deferred-loading/triggers/on-viewport-demo/on-viewport-demo.component')
                    .then(c => c.OnViewportDemoComponent)
            },
            {
                path: 'on-timer',
                loadComponent: () => import('./04_deferred-loading/triggers/on-timer-demo/on-timer-demo.component')
                    .then(c => c.OnTimerDemoComponent)
            },
            {
                path: 'on-hover',
                loadComponent: () => import('./04_deferred-loading/triggers/on-hover-demo/on-hover-demo.component')
                    .then(c => c.OnHoverDemoComponent)
            },
            {
                path: 'when',
                loadComponent: () => import('./04_deferred-loading/triggers/defer-when-demo/defer-when-demo.component')
                    .then(c => c.DeferWhenDemoComponent)

            },
            {
                path: 'on-interaction',
                loadComponent: () => import('./04_deferred-loading/triggers/on-interaction-demo/on-interaction-demo.component')
                    .then(c => c.OnInteractionDemoComponent)
            },
            {
                path: 'yt-player',
                loadComponent: () => import('./04_deferred-loading/youtube-player/youtube-video.component')
                    .then(c => c.YouTubeVideoComponent)
            }
        ]
    },




];
