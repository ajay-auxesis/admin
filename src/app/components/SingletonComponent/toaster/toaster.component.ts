import { SharedService } from './../../../service/shared.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit {
private timerObserver: Subscription;
public matchdto: any;
public IstosterOn:boolean;
public i: any;
_IsAuthenticated:boolean;
  constructor(private _sharedservice:SharedService ) { 

  }

  ngOnInit() {
    //  let timer = Observable.interval(100);
    //     this.timerObserver = timer.subscribe(() =>{ 
    //     });
  }

  closenotifaction(): void {
   this.IstosterOn=false;
    }

}
