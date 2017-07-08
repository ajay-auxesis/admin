
import { AppSettings } from './../components/SingletonComponent/lowest-ask-price/app-settings';
import { Observable } from 'rxjs/Observable';
import { CurrencyService } from './CurrencyServices/currency.service';
import { Http } from '@angular/http';
import { OrderMode } from 'app/enums/order-mode.enum';
import 'rxjs/Rx';
import { CurrencyType } from 'app/enums/currency-type.enum';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Validator,  NG_VALIDATORS } from '@angular/forms';

@Injectable()
export class ValidationmessageserviceService {


  formgroupparents: FormGroup;

constructor(private _http : Http,private  _currencyService:CurrencyService){}
   
     static getValidatorErrorMessage(validatorName: string, validatorValue?: any,confirmpassword?:string,controlname?:string,currencytype?:string) {
        if(currencytype==undefined){ currencytype=''; }

        let config = {
            'required': `${currencytype} ${controlname} Required`,
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'minlength': `Minimum length ${validatorValue.requiredLength}`,
            'EmailInuse': `This Email Id Already taken.`,
            'passwordnotmatch':`Password does not match`,
            'onlynumber' : `${controlname} must be a number .`,
            'maxValue' : `Not enough ${currencytype} balance`,
            'Check' : `Not enough ${currencytype} balance`,
            'balanceCheck' : `Not enough USD balance`,
        };

        return config[validatorName];
    }


    static emailValidator(control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
        }
    }

       static emailinuseValidator(control) {
        // RFC 2822 compliant regex
        if (control.value !="amjadlko@gmail.com") {
            return null;
        } else {
            return { 'EmailInuse': true };
        }
    }

    static passwordValidator(control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        } else {
            return { 'invalidPassword': true };
        }
    }

    static passwordMatchValidator(g: FormGroup) {

         if (g.get('Password').value === g.get('ConfirmPassword').value) {
            return null;
        } else {
            return { 'passwordnotmatch': true };
        }
    }


static onlynumber(control){

try
{
      if (control.value.match(/^-?\d*\.?\d+$/)) {
            return null;
        } else {
            return { 'onlynumber': true };
        }
}
catch(error)
{
 return null;
}
   
}



 static ConfirmpasswordValidator(control:FormControl) {

if(control.touched)
{

let formgroup:FormGroup=control._parent;

let password:string=formgroup.controls["Password"].value

if(password!==control.value)
 
 {

     return { 'passwordnotmatch': true };
 }



}

 return null;
       
       
    }



 static CheckBalance(control ){


 return checkmybalance(control , 'Amounnt');

}



}


// function checkmybalance(control,source: string) : Observable <any> {


// }