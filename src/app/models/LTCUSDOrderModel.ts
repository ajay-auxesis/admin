import { OrderMode } from 'app/enums/order-mode.enum';
import {CurrencyType } from 'app/enums/currency-type.enum';

export class orderModel {

Amount:number;
Rate: number;
OrderMode:OrderMode;
Total: number;
Fee:number;
CurrencyType:CurrencyType;

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
BuyRate: number;
 SellRate: number;
  Currency: number;
}