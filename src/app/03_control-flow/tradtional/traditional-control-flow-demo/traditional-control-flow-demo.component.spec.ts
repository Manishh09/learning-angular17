import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraditionalControlFlowDemoComponent } from './traditional-control-flow-demo.component';

describe('TraditionalControlFlowDemoComponent', () => {
  let component: TraditionalControlFlowDemoComponent;
  let fixture: ComponentFixture<TraditionalControlFlowDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraditionalControlFlowDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TraditionalControlFlowDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
