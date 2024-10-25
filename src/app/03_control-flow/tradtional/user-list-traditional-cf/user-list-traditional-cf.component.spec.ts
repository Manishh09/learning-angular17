import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListTraditonalCfComponent } from './user-list-traditonal-cf.component';

describe('UserListTraditonalCfComponent', () => {
  let component: UserListTraditonalCfComponent;
  let fixture: ComponentFixture<UserListTraditonalCfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListTraditonalCfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserListTraditonalCfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
