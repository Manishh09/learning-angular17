import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnInteractionDemoComponent } from './on-interaction-demo.component';

describe('OnInteractionDemoComponent', () => {
  let component: OnInteractionDemoComponent;
  let fixture: ComponentFixture<OnInteractionDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnInteractionDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnInteractionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
