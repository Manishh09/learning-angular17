import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorsDemoComponent } from './selectors-demo.component';

describe('SelectorsDemoComponent', () => {
  let component: SelectorsDemoComponent;
  let fixture: ComponentFixture<SelectorsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectorsDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectorsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
