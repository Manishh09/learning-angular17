import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnTimerDemoComponent } from './on-timer-demo.component';

describe('OnTimerDemoComponent', () => {
  let component: OnTimerDemoComponent;
  let fixture: ComponentFixture<OnTimerDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnTimerDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnTimerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
