import { AppSettings } from './../../../app-settings';
import { Observable } from 'rxjs/Rx';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-current-active-orders',
  templateUrl: './current-active-orders.component.html',
  styleUrls: ['./current-active-orders.component.css']
})
export class CurrentActiveOrdersComponent implements OnInit {

  constructor(private _http: Http) { }

  ngOnInit() {
  }

}
