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
  onUpdateVideoEvent(video:any){
    this.videoService.updateVideo(video)
    .subscribe(resUpdatedVideo=>video =resUpdatedVideo);
    this.selectedVideo = null;
  }
    onDeleteVideoEvent(video:any){
     let videoArray = this.videos;
     this.videoService.deleteVideo(video)
     .subscribe(resDeletedVideo => {
       for(let i=0; i<videoArray.length; i++)
       {
         if(videoArray[i]._id === video._id){
           videoArray.splice(i,1);
         }
       }

     });
     this.selectedVideo = null;

    };
  newVideo(){
    this.hidenewVideo = false;
  }

}
