import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouTubeVideoComponent } from './youtube-video.component';

describe('YouTubeVideoComponent', () => {
  let component: YouTubeVideoComponent;
  let fixture: ComponentFixture<YouTubeVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YouTubeVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YouTubeVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
