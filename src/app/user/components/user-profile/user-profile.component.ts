import { Component, OnInit } from '@angular/core';

import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

 splittedtoekn:any
 unsplittedtoekn:any
  currentUser: any;

  constructor(private token:LoginService) { }

  ngOnInit(): void {
    this.unsplittedtoekn = localStorage.getItem("token") || '{}' ;
    this. splittedtoekn=this.unsplittedtoekn.split(".");
 
 
    this.currentUser=JSON.parse( atob(this.splittedtoekn[1]));
    console.log(this.currentUser)
    return this.currentUser;
      
    
  }

}
