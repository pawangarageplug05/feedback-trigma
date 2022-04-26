import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from './Constants';
import { FeedbackRequestData } from './Models/feedback-request';
import { RootObject } from './Models/locationData';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(public http:HttpClient) { }

  getLocation():Observable<RootObject>{
    return this.http.get<RootObject>(Constants.Location_URL)
  }
  createFeedbackInfo(data:FeedbackRequestData){
    return this.http.post(Constants.CREATE_FEEDBACK,data)
  }
}
