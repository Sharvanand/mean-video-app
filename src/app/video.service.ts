import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Video } from './video';
import 'rxjs/add/operator/map';

@Injectable()
export class VideoService {


  private getUrl = "/api";
  private postUrl = "/api";

  constructor(private http : Http) { }

  getVideos(){
    return this.http.get(this.getUrl)
    .map((response:Response)=>response.json());
  }

  addVideo(video: Video){
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers});
    return this.http.post(this.postUrl,JSON.stringify(video),options)
    .map((response:Response) => response.json());

  }

}
