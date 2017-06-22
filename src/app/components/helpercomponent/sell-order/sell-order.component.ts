import { AppSettings } from './../../../app-settings';
import { Observable } from 'rxjs/Rx';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-sell-order',
  templateUrl: './sell-order.component.html',
  styleUrls: ['./sell-order.component.css']
})
export class SellOrderComponent implements OnInit {

  constructor(private _http: Http) { }

  ngOnInit() {
  }

}
