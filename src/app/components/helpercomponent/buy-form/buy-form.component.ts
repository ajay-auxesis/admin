import { AppSettings } from './../../../app-settings';
import { Observable } from 'rxjs/Rx';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-buy-form',
  templateUrl: './buy-form.component.html',
  styleUrls: ['./buy-form.component.css']
})
export class BuyFormComponent implements OnInit {
   @Input('group') public buyform: FormGroup;
  constructor(private _http:Http) { }

  ngOnInit() {
  
  }

}
