import { Component, OnInit } from '@angular/core';
import { Video } from './../video';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  videos: Video[]=[
    {"_id":"1", "title":"title1", "url":"url1", "description":"des1"},
    {"_id":"2", "title":"title2", "url":"url2", "description":"des2"},
    {"_id":"3", "title":"title3", "url":"url3", "description":"des3"},
    {"_id":"4", "title":"title4", "url":"url4", "description":"des4"}

  ];
  selectedVideo : Video;

  constructor() { }

  ngOnInit() {
  }
  onSelectVideo(video:any){
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }

}
