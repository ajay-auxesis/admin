import { Component, OnInit, Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
@Component({
  selector: 'app-order-component',
  templateUrl: './order-component.component.html',
  styleUrls: ['./order-component.component.css']
})
export class OrderComponentComponent implements OnInit {
@Input() ordertype : string;

public order:string;
  constructor(private _http: Http) { }


  ngOnInit() {
this.order=this.ordertype;
  }

}
