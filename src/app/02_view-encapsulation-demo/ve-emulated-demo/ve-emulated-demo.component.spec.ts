import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeEmulatedDemoComponent } from './ve-emulated-demo.component';

describe('VeEmulatedDemoComponent', () => {
  let component: VeEmulatedDemoComponent;
  let fixture: ComponentFixture<VeEmulatedDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeEmulatedDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeEmulatedDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
