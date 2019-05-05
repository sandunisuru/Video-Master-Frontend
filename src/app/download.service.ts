import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(private http: HttpClient) { }

  getDownloadVideo(url){

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json' });
    let options = { headers: headers };

    let data = {
      url: url
    }

    return this.http.post("https://cors-anywhere.herokuapp.com/http://142.93.211.138:3000/video", data, options);


  }
}
