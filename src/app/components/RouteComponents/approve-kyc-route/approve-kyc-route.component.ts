import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approve-kyc-route',
  templateUrl: './approve-kyc-route.component.html',
  styleUrls: ['./approve-kyc-route.component.css']
})
export class ApproveKycRouteComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    
   // console.log(this.titleService);
  }

}
