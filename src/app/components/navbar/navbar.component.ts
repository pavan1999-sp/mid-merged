import { Component, OnInit  } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  istoken:any
 
  constructor(private token:LoginService) { }
 
islogout(){
  this.token.logout()
}
gettoken(){
  this.istoken=this.token.getToken()
}
  
  ngOnInit(): void {
  
  this.gettoken()
   
  }
  
}
