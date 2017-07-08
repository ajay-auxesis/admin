import { ValidationmessageserviceService } from './../../../service/validationmessageservice.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoaderService } from 'app/service/loader-service.service';
import { Responsecode } from 'app/enums/responsecode.enum';
import { LoginModel } from './../../../models/login';


import { AppSettings } from 'app/app-settings';
import { SharedService } from './../../../service/shared.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Rx';
import { HttpEmitterService } from './../../../service/CoustomeHttpService/http-emitter.service';


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-message-popup',
  templateUrl: './error-message-popup.component.html',
  styleUrls: ['./error-message-popup.component.css']
})
export class ErrorMessagePopupComponent implements OnInit {

IsUserunauthorized:boolean=false;
Ispaymentrequired:boolean=false;
private IsUserunauthorizedObserver: Subscription;
private IspaymentrequiredObserver: Subscription;
unauthoriza:string='';
loginmodel: FormGroup;
  constructor(private emitterService : HttpEmitterService,private _sharedservice:SharedService,private LoaderService: LoaderService,private fb: FormBuilder ){ 

this.emitterService.unauthorizeduseremiter.subscribe(json => {
 this.IsUserunauthorized = json as boolean;
      })
this.emitterService.paymentrequiredemiter.subscribe(json => {
 this.Ispaymentrequired = json as boolean;
      })
     this.loginmodel =this.fb.group({
        userName: new FormControl('', [Validators.required,ValidationmessageserviceService.emailValidator]),
           password: new FormControl('', [Validators.required]),
       });
  }

  ngOnInit() {
   let timer = Observable.interval(1000);
        this.IsUserunauthorizedObserver = timer.subscribe(() =>{
           this.IsUserunauthorized
           
       });
 this.IspaymentrequiredObserver = timer.subscribe(() =>{
           this.Ispaymentrequired
           
       });
  }
  public payment()
{
this.Ispaymentrequired=false;
}


doLogin({ value , valid }: { value: LoginModel, valid: boolean }) {

  this._sharedservice.Login(value).debounceTime(400).subscribe(result =>{

 if(result.status=Responsecode.OK)
 {
  
location.reload();
​let responobject:any=result.json();
 localStorage.setItem(AppSettings.localtokenkey, responobject.AccessToken);
localStorage.setItem('username',responobject.UserName );
this.IsUserunauthorized=false;
 }
 },
  error => {
  if(error.status==Responsecode.Unauthorized)
{
   this.LoaderService.displayLoader(false);
 this.unauthoriza="Invalid User Id or Password. Try again";
 }
        }
  );

return false;
    }

    
}