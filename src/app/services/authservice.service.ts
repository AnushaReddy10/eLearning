import { Iuser } from './../user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  private auth_url: string;

  constructor(private http: HttpClient) {
    this.auth_url =  'http://localhost:8080/user';
  }

  public getuserData(): Observable<Iuser[]>{
    return this.http.get<Iuser[]>(this.auth_url);
  }
}
