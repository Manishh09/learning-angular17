import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostsTraditionalCfComponent } from './posts-traditional-cf.component';

 
describe('PostsTraditonalCfComponent', () => {
  let component: PostsTraditionalCfComponent;
  let fixture: ComponentFixture<PostsTraditionalCfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsTraditionalCfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostsTraditionalCfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
