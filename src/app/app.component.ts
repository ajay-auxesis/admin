import { RateEmitterService } from './service/Emitters/rate-emitter.service';
import { MatchEmitterService } from './service/Emitters/match-emitter.service';
import { Responsecode } from 'app/enums/responsecode.enum';
import { HuBConectionRequestModel } from './models/login';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { orderListModel } from './models/LTCUSDOrderModel';
import { SignalRService } from './service/HubServices/signal-r.service';
import { AppSettings } from './app-settings';
import { Location } from '@angular/common';
import { PlatformLocation } from '@angular/common'
import { Observable } from 'rxjs/Rx';
import { SharedService } from './service/shared.service';
import { Component, NgZone } from '@angular/core';
import { LoaderService } from "./service/loader-service.service";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 objLoaderStatus: boolean;
   private connection: SignalR;
_IsAuthenticated:boolean=true;
    //signalR proxy reference
    private proxy: SignalR.Hub.Proxy;
    bodyClasses:string;
location:string;
previousUrl:any;
public canSendMessage: Boolean;
  constructor(private _matchEmitterService:MatchEmitterService,private _ngZone: NgZone,private _signalRService:SignalRService,private _sharedservice: SharedService, private loaderService: LoaderService, private _router : Router ,private _location: Location, private platform: PlatformLocation ,private activatedRoute: ActivatedRoute,
    private titleService: Title,private _rateEmitterService:RateEmitterService) { 
   
   this._sharedservice._IsAuthenticated.subscribe(value => this._IsAuthenticated = value);
  this.objLoaderStatus=false; 
  }





 ngOnInit() {
var self=this;
 var connection = $.hubConnection(AppSettings.HubUrl);
         var cryptohubproxy = connection.createHubProxy('myHub');
          connection.start().done(function () {

    var hubidstring=localStorage.getItem('HubId');

    cryptohubproxy.invoke("Subscribe",hubidstring);

             console.log('Now connected, connection ID=' + connection.id);
             let humconection=new HuBConectionRequestModel();
             humconection.ConectionId=connection.id;
      

         });
         cryptohubproxy.on('whennewOrderAdded', function (newOrder) {

             
           let orderListModelobj:orderListModel=newOrder as orderListModel;

          
           self._signalRService.startConnection(orderListModelobj);
         });


    cryptohubproxy.on('whenMatchHappend', function (matchorder) {

        self._matchEmitterService.whenMatchedHappend(matchorder);

            console.log("whenMatchHappend");
         
         });


           cryptohubproxy.on('whenRateChange', function (RateChange) {

      self._rateEmitterService.whenRateChanged(RateChange);

         console.log(RateChange);
            console.log("whenRateChange");
         
         });



         

this.loaderService.loaderStatus.subscribe((val: boolean) => {
            this.objLoaderStatus = val;
        });
if (localStorage.getItem(AppSettings.localtokenkey)!=null && this._location.path()=='') {
   this._router.navigate(['LtcUsd']);
  }
  this.platform.onPopState(()=>{
    
       this._router.events.filter(event => event instanceof NavigationEnd).pairwise()
        .subscribe(e => {
          this.previousUrl= e[1].url;
          if(this.previousUrl=='/' || this.previousUrl=='/SignUp' || this.previousUrl=='/LtcUsd' || this.previousUrl==''){
             this._router.navigate(['LtcUsd']);
           }
        });
      });
    this._router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe((event) => this.titleService.setTitle("Crypto Trading | " +event['title']));
 }
    ngAfterViewChecked() {
    document.body.classList.remove(document.body.classList.item(1));
   this.location=window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
   if(this.location==''){this.location='home';}
    document.body.classList.add(this.location);
    // 
  }
}
