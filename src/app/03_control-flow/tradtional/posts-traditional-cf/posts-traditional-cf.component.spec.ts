import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsTraditonalCfComponent } from './posts-traditonal-cf.component';

describe('PostsTraditonalCfComponent', () => {
  let component: PostsTraditonalCfComponent;
  let fixture: ComponentFixture<PostsTraditonalCfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsTraditonalCfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostsTraditonalCfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
