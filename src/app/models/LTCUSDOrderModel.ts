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
this.IsHigheRate=false;
this.IsNewOrder=false;
}
Amount:number;
Rate: number;
owner:boolean;
CurrencyType:CurrencyType;
OrderMode:OrderMode ;
Date:Date;
IsHigheRate:boolean;
IsNewOrder:boolean;
}