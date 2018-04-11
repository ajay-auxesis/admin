import { LoaderService } from 'app/service/loader-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserListService } from './../../../service/userlist/user-list.service';
import 'rxjs/Rx';

require( 'datatables.net-buttons/js/buttons.colVis.js' );
require( 'datatables.net-buttons/js/buttons.html5.js' ); 
require( 'datatables.net-buttons/js/buttons.flash.js' ); 
require( 'datatables.net-buttons/js/buttons.print.js' );

var $       = require( 'jquery' );
var dt      = require( 'datatables.net' );
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit { 

  userslist:string = '' ;
  updateUserId:string = '' ;
  updateUserStatus:string = '' ;
  constructor(private _userListService:UserListService,private _router: Router,private loaderService: LoaderService) { }

  ngOnInit() {
     this.updateUserId ='A' ;
     this.updateUserStatus =' ' ;
    this._userListService.getUserslist().debounceTime(1200).subscribe(result=>{
      let data = result.json();
      // console.log(data);
      this.userslist =data;
	  this.loaderService.displayLoader(false);
    },
    error => {
       this.loaderService.displayLoader(false);
    });
  
  }
  user_profile(){
      this._router.navigate(['user_profile']);
  }
  changeStatus(email,status,rowId){
  
      this._userListService.changeUserStatus(email).debounceTime(1200).subscribe(result=>{
       console.log(result);
        if(result.status=='201') {
          this.updateUserId = rowId ;
          this.updateUserStatus = status ;
        }
       // this.userslist =data;
         this.loaderService.displayLoader(false);
      },
      error => {
         this.loaderService.displayLoader(false);
      });

  }
}
