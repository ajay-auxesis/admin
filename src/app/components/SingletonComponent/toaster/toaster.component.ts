import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Rx';
import { MatchEmitterService } from './../../../service/Emitters/match-emitter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit {
private timerObserver: Subscription;
public matchdto: any;
public IstosterOn:boolean;
  constructor(private _matchEmitterService:MatchEmitterService ) { 

 this.IstosterOn=false;
      this._matchEmitterService.whenMatchedHappendEvent.subscribe(json => { 
         this.IstosterOn=true;
   this.matchdto=json;
       console.log("from whenMatchedHappendEvent");
       console.log(json);
  });
  }

  ngOnInit() {
     let timer = Observable.interval(100);
        this.timerObserver = timer.subscribe(() =>{ 
        });
  }

  closenotifaction(): void {
   this.IstosterOn=false;
    }

}
