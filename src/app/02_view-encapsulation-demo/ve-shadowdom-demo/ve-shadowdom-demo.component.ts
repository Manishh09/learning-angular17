import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ve-shadowdom-demo',
  standalone: true,
  imports: [],
  templateUrl: './ve-shadowdom-demo.component.html',
  styleUrl: './ve-shadowdom-demo.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class VeShadowdomDemoComponent {

}
