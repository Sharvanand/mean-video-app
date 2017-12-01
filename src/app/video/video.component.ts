import { Component, OnInit } from '@angular/core';
import { Video } from './../video';
import { VideoService } from './../video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  providers:[VideoService]
})
export class VideoComponent implements OnInit {

  videos:Array<Video>;
  
  selectedVideo : Video;

  private hidenewVideo: boolean =  true;
  constructor( private videoService : VideoService) { }

  ngOnInit() {
    this.videoService.getVideos()
    .subscribe(resVideoData => this.videos = resVideoData);
  }
  onSelectVideo(video:any){
    this.selectedVideo = video;
    this.hidenewVideo = true;
    console.log(this.selectedVideo);
  }
  onSubmitAddVideo(video:Video){
    this.videoService.addVideo(video)
    .subscribe(resNewVideo=>{
      this.videos.push(resNewVideo);
      this.selectedVideo = resNewVideo;
    });
  }
  newVideo(){
    this.hidenewVideo = false;
  }

}
