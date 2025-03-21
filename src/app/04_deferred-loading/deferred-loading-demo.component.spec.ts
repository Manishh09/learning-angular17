import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferredLoadingDemoComponent } from './deferred-loading-demo.component';

describe('DeferredLoadingDemoComponent', () => {
  let component: DeferredLoadingDemoComponent;
  let fixture: ComponentFixture<DeferredLoadingDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferredLoadingDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferredLoadingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
