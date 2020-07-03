import { Idashboard } from './../dashboard';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashcoursesService {

  private myurl : string = "./assets/data/courses.json";

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Idashboard[]>{
    return this.http.get<Idashboard[]>(this.myurl);
  }

}
