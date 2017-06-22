import { AppSettings } from './../../../app-settings';
import { Observable } from 'rxjs/Rx';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-trading-history',
  templateUrl: './trading-history.component.html',
  styleUrls: ['./trading-history.component.css']
})
export class TradingHistoryComponent implements OnInit {

  constructor(private _http: Http) { }

  ngOnInit() {
  }

}
