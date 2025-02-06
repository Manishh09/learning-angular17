import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListTraditionalCfComponent } from './user-list-traditional-cf.component';

 
describe('UserListTraditonalCfComponent', () => {
  let component: UserListTraditionalCfComponent;
  let fixture: ComponentFixture<UserListTraditionalCfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListTraditionalCfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserListTraditionalCfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
