import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { SharedService } from './../service/shared.service';
import { Component, OnInit,Optional  } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {


_user:string='';
_router;
constructor(private _sharedservice:SharedService,private route: Router,private location: Location){

this._user = localStorage.getItem('username');

}

ngOnInit() {
   

  }

}