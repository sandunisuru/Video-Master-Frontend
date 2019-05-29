import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  sendEmailfromServer(message) {
    let data = {
      message: message
    }

    return this.http.post("https://videomaster.herokuapp.com/report", data);

  }
}
