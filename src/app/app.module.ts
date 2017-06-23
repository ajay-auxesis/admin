import { DepositServiceService } from './service/deposit-service.service';
import { LtcUsdComponentComponent } from './components/BuySellDeals/ltc-usd-component/ltc-usd-component.component';
import { PreloaderService } from './service/preloader.service';
import { BuyselldealserviceService } from './service/sellbuyservice/buyselldealservice.service';
import { LitcoinComponent } from './components/BuySellDeals/litcoin/litcoin.component';
import { EhtereumComponent } from './components/BuySellDeals/ehtereum/ehtereum.component';
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
import { PubSubService } from './service/pub-sub.service';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { XHRBackend, RequestOptions, Http ,ConnectionBackend,HttpModule} from '@angular/http';
import { ValidationMessageComponent } from './shared/validation-message/validation-message.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';
import {Ng2Webstorage} from 'ngx-webstorage';
import { LoaderComponent } from './loader/loader.component';
import { httpFactory } from "./service/CoustomeHttpService/httpFactory";
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { EntityComponent } from './entity/entity.component';

import { BuyFormComponent } from './components/helpercomponent/buy-form/buy-form.component';
import { SellFormComponent } from './components/helpercomponent/sell-form/sell-form.component';
import { SellOrderComponent } from './components/helpercomponent/sell-order/sell-order.component';
import { BuyOrderComponent } from './components/helpercomponent/buy-order/buy-order.component';
import { CurrentActiveOrdersComponent } from './components/helpercomponent/current-active-orders/current-active-orders.component';
import { TradingHistoryComponent } from './components/helpercomponent/trading-history/trading-history.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { NotificationComponent } from './Notification/notification/notification.component';
import { SpinnerComponentModule } from 'ng2-component-spinner';
import { OrderComponentComponent } from './components/helpercomponent/order-component/order-component.component';
import { DepositComponent } from './components/helpercomponent/deposit/deposit.component';
import { DepositComponentComponent } from './components/BuySellDeals/deposit-component/deposit-component.component';
import { AmountBalanceDirective } from './Directives/amount-balance.directive';
import { MyCurrencyBalanceComponent } from './components/helpercomponent/my-currency-balance/my-currency-balance.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'SignUp', component: RegisterComponent },
  { path: 'SignIn', component: LoginComponent },
 { path: 'myprofile', component: MyprofileComponent,canActivate:[AuthGuard] },
 { path: 'entity', component: EntityComponent,canActivate:[AuthGuard] },
 { path: 'LTC', component: LitcoinComponent,canActivate:[AuthGuard] },
 { path: 'ETH', component: EhtereumComponent,canActivate:[AuthGuard] },
 { path: 'LtcUsd', component: LtcUsdComponentComponent,canActivate:[AuthGuard] },
 { path: 'deposit', component: DepositComponentComponent,canActivate:[AuthGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ValidationMessageComponent,
    MyprofileComponent,
    LeftsidebarComponent,
    RightsidebarComponent,
    LoaderComponent,
    EntityComponent,
    EhtereumComponent,
    LitcoinComponent,
    BuyFormComponent,
    SellFormComponent,
    SellOrderComponent,
    BuyOrderComponent,
    CurrentActiveOrdersComponent,
    TradingHistoryComponent,
    PreloaderComponent,
    NotificationComponent,
    LtcUsdComponentComponent,
    OrderComponentComponent,
    DepositComponent,
    DepositComponentComponent,
    AmountBalanceDirective,
    MyCurrencyBalanceComponent,
    
    
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
   SpinnerComponentModule

  ],
  providers: [AuthGuard,SlimLoadingBarModule,BuyselldealserviceService,ValidationmessageserviceService, SharedService, RegisterService,LoaderService,PubSubService,PreloaderService,DepositServiceService,
   // {provide: Http, useClass: ExtendedHttpService },
   {
      provide: Http,
            useFactory: httpFactory,
            deps: [XHRBackend, RequestOptions,LoaderService]
     
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
