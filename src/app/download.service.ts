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

    return this.http.post("http://localhost:3000/video", data, options);


  }

  getClientIPAddress(){
   
    return this.http.get("https://jsonip.com/");
  }
}
