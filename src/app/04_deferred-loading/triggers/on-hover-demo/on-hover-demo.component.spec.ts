import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnHoverDemoComponent } from './on-hover-demo.component';

describe('OnHoverDemoComponent', () => {
  let component: OnHoverDemoComponent;
  let fixture: ComponentFixture<OnHoverDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnHoverDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnHoverDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
