import { ConnectionResolverService } from './service/HubServices/connection-resolver.service';
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
import { XHRBackend, RequestOptions, Http ,ConnectionBackend,HttpModule} from '@angular/http';
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
import { ChannelConfig, ChannelService, SignalrWindow } from "app/service/HubServices/channel.service";
import { SignalRModule } from 'ng2-signalr';
import { SignalRConfiguration } from 'ng2-signalr';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'SignUp', component: RegisterComponent },
  { path: 'SignIn', component: LoginComponent },
 { path: 'deposit', component: DepositeBalanceRouteComponent,canActivate:[AuthGuard] },
 { path: 'LtcUsd', component: LtcUsdRouteComponent,canActivate:[AuthGuard] }
];
// let channelConfig = new ChannelConfig();  
// channelConfig.url = "http://localhost:25704/signalr";  
// channelConfig.hubName = "myHub";

export function createConfig(): SignalRConfiguration {
  const c = new SignalRConfiguration();
  c.hubName = 'myHub';
  c.qs = { user: 'donald' };
  c.url = 'http://localhost:25704/signalr';
  c.logging = true;
  return c;
}

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
   MyCurrencyBalanceComponent
],
  imports: [
    SignalRModule.forRoot(createConfig),
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
  providers: [AuthGuard,CurrencyService,SlimLoadingBarModule,BuyselldealserviceService,ValidationmessageserviceService, SharedService, RegisterService,LoaderService,DepositServiceService,
// ChannelService,
//     { provide: SignalrWindow, useValue: window },
//     { provide: 'channel.config', useValue: channelConfig },
   {
      provide: Http,
            useFactory: httpFactory,
            deps: [XHRBackend, RequestOptions,LoaderService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }