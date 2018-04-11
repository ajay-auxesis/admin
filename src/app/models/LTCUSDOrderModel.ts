import { OrderMode } from 'app/enums/order-mode.enum';
import {CurrencyType } from 'app/enums/currency-type.enum';

export class orderModel {

CurrencyType:CurrencyType;
OrderMode:OrderMode;
Rate:number;

}


export class orderListModel {
constructor(){
this.IsHigestVolume=false;
this.IsNewOrder=false;
}
Amount:number;
Rate: number;
owner:boolean;
CurrencyType:CurrencyType;
OrderMode:OrderMode ;
Date:Date;
IsHigestVolume:boolean;
IsNewOrder:boolean;
}

export class newRateModel {
constructor(){
}
OrderMode:OrderMode ;
BuyRate: number;
 SellRate: number;
  Currency: number; 
   BuyVolume: number;
    SellVolume:number;
     OrderStatus:number;
      AlterRateList: any;
}

export class matchorderModel {
constructor(){
}
OrderId:any;

	Type:number;
  	Rate: number;
  	Amount:number;
    FilledAmount:number;
    RemainigAmount:number;
    OrderStatus:number;	
  CreationDateTime:Date;       
owner:boolean;
currencyType:CurrencyType;
CurrencyType:CurrencyType;
OrderMode:OrderMode ;
Date:Date;
IsHigestVolume:boolean;
IsNewOrder:boolean;
}

export class removematchorderModel {

OrderMode:number;
Rate:number;
RemainingAmount:number;
}

export class createorderModel {

CurrencyType:CurrencyType;
OrderMode:OrderMode;
MinAmountrange:number;
MaxAmountrange:number;
MinRaterange:number;
MaxRaterange:number;
MaxRcord:number;

}

export class testorderModel {

CurrencyType:CurrencyType;
OrderMode:OrderMode;
Amount:number;
Rate:number;
MaxRcord:number;

}

export class postorderModel {

CurrencyType:CurrencyType;
OrderMode:OrderMode;
Amount:number;
Rate:number;

}