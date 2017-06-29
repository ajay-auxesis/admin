

import { CurrencyVolumeComponent } from './components/SingletonComponent/currency-volume/currency-volume.component';
import { OrderLisRowComponent } from './components/helpercomponent/order-lis-row/order-lis-row.component';
import { MatchOrderComponent } from './components/SingletonComponent/match-order/match-order.component';
import { ActiveOrderRouteComponent } from './components/RouteComponent/active-order-route/active-order-route.component';
import { ActiveOrderComponent } from './components/SingletonComponent/active-order/active-order.component';
import { MatchOrderRouteComponent } from './components/RouteComponent/match-order-route/match-order-route.component';
import { DynamicOrderRowService } from './components/helpercomponent/order-component/dynamic-order-row.service';
import { LowestAskPriceComponent } from './components/SingletonComponent/lowest-ask-price/lowest-ask-price.component';
import { SignalRService } from './service/HubServices/signal-r.service';

import { CurrencyRateService } from './service/CurrencyServices/currency-rate.service';

import { CurrencyService } from './service/CurrencyServices/currency.service';
import { CurenncyOrderComponent } from './components/SingletonComponent/curenncy-order/curenncy-order.component';
import { DepositServiceService } from './service/deposit-service.service';
import { BuyselldealserviceService } from './service/sellbuyservice/buyselldealservice.service';
import { LoaderService } from './service/loader-service.service';
import { RegisterService } from './service/registerservice/register.service';
import { SharedService } from './service/shared.service';
import { ValidationmessageserviceService } from './service/validationmessageservice.service';
import { AuthGuard } from './service/auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { XHRBackend, RequestOptions, Http, ConnectionBackend, HttpModule, JsonpModule } from '@angular/http';
import { ValidationMessageComponent } from './shared/validation-message/validation-message.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import {Ng2Webstorage} from 'ngx-webstorage';
import { LoaderComponent } from './loader/loader.component';
import { httpFactory } from "./service/CoustomeHttpService/httpFactory";
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { CurrentActiveOrdersComponent } from './components/helpercomponent/current-active-orders/current-active-orders.component';
import { TradingHistoryComponent } from './components/helpercomponent/trading-history/trading-history.component';
import { SpinnerComponentModule } from 'ng2-component-spinner';
import { OrderComponentComponent } from './components/helpercomponent/order-component/order-component.component';
import { LtcUsdRouteComponent } from './components/RouteComponent/ltc-usd-route/ltc-usd-route.component';
import { DepositeBalanceRouteComponent } from './components/RouteComponent/deposite-balance-route/deposite-balance-route.component';
import { DepositeBalanceComponent } from './components/SingletonComponent/deposite-balance/deposite-balance.component';
import { MyCurrencyBalanceComponent } from "app/components/SingletonComponent/my-currency-balance/my-currency-balance.component";
import { StocChartComponent } from './components/SingletonComponent/stoc-chart/stoc-chart.component';
import { StocMarketComponent } from './components/SingletonComponent/stoc-market/stoc-market.component';
//import { HashLocationStrategy, LocationStrategy } from '@angular/common';


const routes: Routes = [
 
  { path: '', component: LoginComponent },
  { path: 'SignUp', component: RegisterComponent },
  
 { path: 'deposit', component: DepositeBalanceRouteComponent,canActivate:[AuthGuard] },
 { path: 'LtcUsd', component: LtcUsdRouteComponent,canActivate:[AuthGuard] },

 { path: 'MatchOrder', component: MatchOrderRouteComponent,canActivate:[AuthGuard] },
 { path: 'ActiveOrder', component: ActiveOrderRouteComponent,canActivate:[AuthGuard] }

];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ValidationMessageComponent,
    LeftsidebarComponent,
   LoaderComponent,
  // ReverseArrayPipe,
   
    CurrentActiveOrdersComponent,
    TradingHistoryComponent,
    OrderComponentComponent,
    DepositeBalanceComponent,
    DepositeBalanceRouteComponent,
   CurenncyOrderComponent,
   LtcUsdRouteComponent,
   LtcUsdRouteComponent,
   DepositeBalanceRouteComponent,
   DepositeBalanceComponent,
   MyCurrencyBalanceComponent,
   StocChartComponent,
   StocMarketComponent,
   CurrencyVolumeComponent,
   LowestAskPriceComponent,
   MatchOrderRouteComponent,
   ActiveOrderComponent,
   ActiveOrderRouteComponent,
   MatchOrderComponent,
   OrderLisRowComponent
   //,
   //ReverseArrayPipe
],
  imports: [
   
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
   
    HttpModule,
    ReactiveFormsModule,
    Ng2Webstorage,
    SlimLoadingBarModule.forRoot(),
    InfiniteScrollModule,
   SpinnerComponentModule,
   JsonpModule
   //,
  // ReverseArrayPipe
  ],
   entryComponents: [OrderLisRowComponent],
 exports: [OrderComponentComponent],
  providers: [AuthGuard,DynamicOrderRowService,CurrencyRateService,SignalRService,CurrencyService,SlimLoadingBarModule,BuyselldealserviceService,ValidationmessageserviceService, SharedService, RegisterService,LoaderService,DepositServiceService,

   {
      provide: Http,
            useFactory: httpFactory,
            deps: [XHRBackend, RequestOptions,LoaderService]
    },
    // {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
