import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnViewportDemoComponent } from './on-viewport-demo.component';

describe('OnViewportDemoComponent', () => {
  let component: OnViewportDemoComponent;
  let fixture: ComponentFixture<OnViewportDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnViewportDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnViewportDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
