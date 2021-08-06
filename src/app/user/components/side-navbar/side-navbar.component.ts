import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { AngmaterialModule } from 'src/app/angmaterial/angmaterial.module';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HomepageComponent } from 'src/app/components/homepage/homepage.component';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {

  @Output() closeSideNav = new EventEmitter();

  constructor(public obj:LoginService) { }
 
  onToggleClose() {
    this.closeSideNav.emit();}

  ngOnInit() {

 

  }

}
