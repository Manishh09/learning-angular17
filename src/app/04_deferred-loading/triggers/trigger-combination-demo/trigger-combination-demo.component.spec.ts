import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerCombinationDemoComponent } from './trigger-combination-demo.component';

describe('TriggerCombinationDemoComponent', () => {
  let component: TriggerCombinationDemoComponent;
  let fixture: ComponentFixture<TriggerCombinationDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TriggerCombinationDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriggerCombinationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
