import { OrderMode } from 'app/enums/order-mode.enum';

import {CurrencyType } from 'app/enums/currency-type.enum';
import { PaymentOperationMode } from "app/enums/payment-operation-mode.enum";

export class DepositModel {

Amount:number;
CurrencyType:CurrencyType;
Type:PaymentOperationMode;

}

export class DepositAmountModel {

Name:string;
 Account:number;
 Description:string;
 UTR_number:any;
CurrencyType:CurrencyType;
Amount: number;

}

export class ManualDepositModel {

Amount: number;
Reason:string;
}

export class CompanyLogoModel {

Title: string;
File:any;
}

export class KYCModel {

Name:string;
 Account:number;
 IFSC:any;
 Phone:number;
Pancard:any;
Address: string;
PancardDocument:any;
AddressDocument:any;
Status:string;
}

export class RawleadgerDto {

RawLeadgerList:Array<RawLeadgerListdto>;


}

export class RawLeadgerListdto {

Amount:number;
currency:CurrencyType;
Type:PaymentOperationMode;
length:number;

}

export class ShowBalanceModel {

Currency:CurrencyType;
Type:PaymentOperationMode;

}

export class GetFeeModel {

//Amount:number;

currencyType:CurrencyType;
orderMode:OrderMode;
//ToCurrency:CurrencyType;

}

export class CompanyModel {

Name: string;
ID:string;
Director:string;
Pancard:any;
}

export class UserModel {

Firstname: string;
Lastname:string;
Userimage:any;
}

export class ChangePasswordModel {

Currentpassword: string;
Password:string;
Confirmpassword:string;
}