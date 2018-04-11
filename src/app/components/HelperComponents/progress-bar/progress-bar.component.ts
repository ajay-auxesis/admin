import { Component, OnInit } from '@angular/core';
import {ProgressBarModule} from "ngx-progress-bar";
@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
_progress:any=0;
_duration:any=0;
  constructor() { }

  ngOnInit() {
    setInterval(()=> {
      var startTime=0;
      if(this._progress==0)
      { startTime = new Date().getTime() ;}
     
  this._progress++;
  if(this._progress==100){var endTime = new Date().getTime() ;
    
     this._progress=0;
  this._duration = endTime.valueOf() - startTime.valueOf()/3600000;
console.log(this._duration);
}

 },1000);
 
  }

}

     
     