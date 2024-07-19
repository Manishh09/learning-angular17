import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeShadowdomDemoComponent } from './ve-shadowdom-demo.component';

describe('VeShadowdomDemoComponent', () => {
  let component: VeShadowdomDemoComponent;
  let fixture: ComponentFixture<VeShadowdomDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeShadowdomDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeShadowdomDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
