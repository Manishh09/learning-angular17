import { Component, signal } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { VeNoneDemoComponent } from "../../02_view-encapsulation-demo/ve-none-demo/ve-none-demo.component";
import { VeEmulatedDemoComponent } from "../../02_view-encapsulation-demo/ve-emulated-demo/ve-emulated-demo.component";
import { VeShadowdomDemoComponent } from "../../02_view-encapsulation-demo/ve-shadowdom-demo/ve-shadowdom-demo.component";

@Component({
  selector: 'app-defer-when-demo',
  standalone: true,
  imports: [MatToolbarModule, MatTabsModule, VeNoneDemoComponent, VeEmulatedDemoComponent, VeShadowdomDemoComponent],
  templateUrl: './defer-when-demo.component.html',
  styleUrl: './defer-when-demo.component.scss'
})
export class DeferWhenDemoComponent {
  selectedIndex = signal(0)
}
