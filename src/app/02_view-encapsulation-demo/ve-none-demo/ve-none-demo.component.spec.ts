import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeNoneDemoComponent } from './ve-none-demo.component';

describe('VeNoneDemoComponent', () => {
  let component: VeNoneDemoComponent;
  let fixture: ComponentFixture<VeNoneDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeNoneDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeNoneDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
