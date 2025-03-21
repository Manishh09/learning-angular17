import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  public readonly apiLoaded = signal(false);

  constructor() {
    if (!this.apiLoaded()) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started

      // create script tag
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      // append tag element to DOM
      document.body.appendChild(tag);
      this.apiLoaded.set(true);
    }
  }

}
