import { Component, inject, input } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { YoutubeService } from './youtube.service';
import { PlaceHolderComponent } from "../../shared/components/place-holder/place-holder.component";

@Component({
  selector: 'app-youtube-player',
  standalone: true,
  imports: [YouTubePlayerModule, PlaceHolderComponent],
  templateUrl: './youtube-video.component.html',
  styleUrl: './youtube-video.component.scss'
})
export class YouTubeVideoComponent {
  isAPILoaded = inject(YoutubeService).apiLoaded;

  videoId = 'DzXMkLCAPRE';
}
