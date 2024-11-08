import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveCompositionDemoComponent } from './directive-composition-demo.component';

describe('DirectiveCompositionDemoComponent', () => {
  let component: DirectiveCompositionDemoComponent;
  let fixture: ComponentFixture<DirectiveCompositionDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveCompositionDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectiveCompositionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
