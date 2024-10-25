import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferWhenDemoComponent } from './defer-when-demo.component';

describe('DeferWhenDemoComponent', () => {
  let component: DeferWhenDemoComponent;
  let fixture: ComponentFixture<DeferWhenDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferWhenDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferWhenDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
