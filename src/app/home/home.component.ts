import { AppSettings } from './../app-settings';
import { LocalStorageService} from 'ngx-webstorage';
import { Router } from '@angular/router';
import { SharedService } from './../service/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _sharedservice: SharedService,private _router : Router) { }

  ngOnInit() {
   
  }

}
