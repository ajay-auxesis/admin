﻿import { HttpEmitterService } from 'app/service/CoustomeHttpService/http-emitter.service';
import { LoaderService } from './../../../service/loader-service.service';
import { AppSettings } from './../../../app-settings';
import { LoginModel, tokenrespone } from './../../../models/login';
import { ValidationmessageserviceService } from './../../../service/validationmessageservice.service';
import { RegisterService } from './../../../service/registerservice/register.service';
import { Http, Response } from '@angular/http';
import { SharedService } from './../../../service/shared.service';
import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { Responsecode } from './../../../enums/responsecode.enum';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 objLoaderStatus: boolean;
  loginmodel: FormGroup;
   loginresponse: Response;
   unauthoriza:string;
_IsAuthenticated:boolean= false;

  constructor(myElement: ElementRef, private _sharedservice: SharedService, private _http: Http,private fb: FormBuilder,private _registerservice: RegisterService,private _router: Router,private loaderService: LoaderService,private erroremitter: HttpEmitterService) {
   this._sharedservice._IsAuthenticated.subscribe(value => this._IsAuthenticated = value);
   
    this.loginmodel =this.fb.group({
           userName: new FormControl('', [Validators.required, ValidationmessageserviceService.emailValidator]),
           password: new FormControl('', [Validators.required]),
            rememberme:new FormControl(''),
       });

   }

doLogin({ value, valid }: { value: LoginModel, valid: boolean }) {

        this._sharedservice.Login(value).debounceTime(400).subscribe(result =>{
        this.loginresponse=result;
        if(this.loginresponse.status=Responsecode.OK)
            {
                if(location.pathname=='/Dashboard'){
                    location.reload();
                  } else{
                  this._router.navigate(['Dashboard']);
                  this.loaderService.displayLoader(false);
                  }
                ​let responobject:any=this.loginresponse.json();
                localStorage.setItem(AppSettings.localtokenkey, responobject.AccessToken);
                localStorage.setItem('username',responobject.UserName );
                localStorage.setItem('HubId',responobject.HubID);
                this._router.navigate(['Dashboard']);
                this.erroremitter.unauthorizedError(false);
            }

          },
          error => {
              if(error.status==Responsecode.Unauthorized)
                {
                  this.loaderService.displayLoader(false);
                this.unauthoriza="Invalid User Id or Password. Try again";
                }
                }
          );

        return false;
    }

    ngOnInit(){
    
    }
}