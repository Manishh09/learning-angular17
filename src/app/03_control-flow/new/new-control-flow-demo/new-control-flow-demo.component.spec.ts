import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewControlFlowDemoComponent } from './new-control-flow-demo.component';

 
describe('ControlFlowDemoComponent', () => {
  let component: NewControlFlowDemoComponent;
  let fixture: ComponentFixture<NewControlFlowDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewControlFlowDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewControlFlowDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
