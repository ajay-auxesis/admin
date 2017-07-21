//import { ChartModule } from 'angular2-highcharts';
import { CurrencyDisplayServiceService } from './service/CurrencyDisplayService/currency-display-service.service';
import { DynamicMatchOrderService } from './components/SingletonComponent/match-order/dynamic-match-order.service';
import { RateEmitterService } from './service/Emitters/rate-emitter.service';
import { MatchEmitterService } from './service/Emitters/match-emitter.service';
import { MatchOrderService } from './service/OrderServices/match-order.service';
import { ActiveOrderService } from './service/OrderServices/active-order.service';
import { ErrorMessagePopupComponent } from './components/SingletonComponent/error-message-popup/error-message-popup.component';
import { HttpEmitterService } from 'app/service/CoustomeHttpService/http-emitter.service';
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
import { BrowserModule , Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { XHRBackend, RequestOptions, Http, ConnectionBackend, HttpModule, JsonpModule, } from '@angular/http';
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
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {DataTableModule} from "angular2-datatable";
import { LoginRouteComponent } from './login-route/login-route.component';
import { ToasterComponent } from './components/SingletonComponent/toaster/toaster.component';
import { MatchListComponent } from './components/SingletonComponent/match-list/match-list.component';



const routes: Routes = [
 
  { path: '', component: LoginRouteComponent ,data: {title: 'SignIn' }},
  { path: 'SignUp', component: RegisterComponent , data: {title: 'SignUp' } },
 { path: 'Forgotpassword', component: ForgotPasswordComponent , data: {title: 'Password Reset' } },
 { path: 'deposit', component: DepositeBalanceRouteComponent,canActivate:[AuthGuard],data: {title: 'Deposit Form' } },
 { path: 'LtcUsd', component: LtcUsdRouteComponent,canActivate:[AuthGuard], data: {title: 'LTC/USD' } },

 { path: 'MatchOrder', component: MatchOrderRouteComponent,canActivate:[AuthGuard] , data: {title: 'Match Order' } },
 { path: 'ActiveOrder', component: ActiveOrderRouteComponent,canActivate:[AuthGuard] , data: {title: 'Active Order' } }

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
   ErrorMessagePopupComponent,
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
   OrderLisRowComponent,
   UserProfileComponent,

   ForgotPasswordComponent,
  
   LoginRouteComponent,
  
   ToasterComponent,
  
   MatchListComponent,
  
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
   JsonpModule,
   DataTableModule,AmChartsModule
   // ChartModule.forRoot(
    //  require('highcharts/highstock'),
     //   require('highcharts/modules/exporting')
  //  ),
   //,
  // ReverseArrayPipe
  ],
entryComponents: [ToasterComponent],
  providers: [AuthGuard,MatchEmitterService,CurrencyDisplayServiceService,DynamicMatchOrderService,DynamicOrderRowService,ActiveOrderService,MatchOrderService,RateEmitterService,HttpEmitterService,CurrencyRateService,SignalRService,CurrencyService,SlimLoadingBarModule,BuyselldealserviceService,ValidationmessageserviceService, SharedService, RegisterService,LoaderService,DepositServiceService,

   {
      provide: Http,
            useFactory: httpFactory,
            deps: [XHRBackend, RequestOptions,LoaderService,]
    },


    // {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
