import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from './../../../service/shared.service';
import { Component, OnInit } from '@angular/core';
//import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.css']
})
export class LeftsidebarComponent implements OnInit {

_IsAuthenticated:boolean=false;
_title:any;
  constructor(private _sharedservice:SharedService,private location: Location,private _router: Router,private route: ActivatedRoute) { 

this._sharedservice._IsAuthenticated.subscribe(value => this._IsAuthenticated = value);


  }

  ngOnInit() {
   this._router.events
    .filter(event => event instanceof NavigationEnd)
    .subscribe(event => {
      let currentRoute = this.route.root;
      while (currentRoute.children[0] !== undefined) {
        currentRoute = currentRoute.children[0];
      }
     this._title= currentRoute.snapshot.data['title'];
    })
  }

}
