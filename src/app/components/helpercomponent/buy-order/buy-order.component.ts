import { AppSettings } from './../../../app-settings';
import { Observable } from 'rxjs/Rx';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-buy-order',
  templateUrl: './buy-order.component.html',
  styleUrls: ['./buy-order.component.css']
})
export class BuyOrderComponent implements OnInit {
@Input() ordertype : string;

public order:string;
  constructor(private _http: Http) { }


  ngOnInit() {
this.order=this.ordertype;
  }

}
