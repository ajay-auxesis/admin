import { Router } from '@angular/router';
import { SharedService } from './../service/shared.service';
import { Component, OnInit,Optional  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent 
 {

_IsAuthenticated:boolean=true;
_user:string='';
_router;
constructor(private _sharedservice:SharedService,private route: Router){

  this._sharedservice._IsAuthenticated.subscribe(value => this._IsAuthenticated = value);
this._user = localStorage.getItem('username');
}



}