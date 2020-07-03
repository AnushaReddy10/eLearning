import { Iuser } from './../../user';
import { DashcoursesService } from './../../services/dashcourses.service';
import { AuthserviceService } from './../../services/authservice.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public loggedIN = false;
  //public user = [];
  public mycourses = [];
  public showModal = null;
  public name = "Anusha";
  users: Iuser[];

  constructor(private _myService: AuthserviceService, private _coursesService: DashcoursesService) {}

  ngOnInit(): void {
    this._myService.getuserData();
    this._coursesService.getCourses().subscribe(data => {this.mycourses = data});
  }

  getuserData() {
    this._myService.getuserData().subscribe(data => {this.users = data} );
  }
  
  showModel(){
    this.showModal = true;
  }
}
