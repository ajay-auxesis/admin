import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { OrderServiceService } from './service/OrderService/order-service.service';
import {ErrorMessagePopupComponent} from './components/SingletonComponent/error-message-popup/error-message-popup.component';
import { FeeServiceService } from './service/FeeService/fee-service.service';
import { HttpEmitterService } from './service/CoustomeHttpService/http-emitter.service';
import { SignalRService } from './service/HubServices/signal-r.service';
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
import { HeaderComponent } from './components/HelperComponents/header/header.component';
import { LoginComponent } from './components/SingletonComponent/login/login.component';
import { RegisterComponent } from './components/SingletonComponent/register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { XHRBackend, RequestOptions, Http, ConnectionBackend, HttpModule, JsonpModule, } from '@angular/http';
import { ValidationMessageComponent } from './shared/validation-message/validation-message.component';
import { LeftsidebarComponent } from './components/HelperComponents/leftsidebar/leftsidebar.component';
import {Ng2Webstorage} from 'ngx-webstorage';
import { LoaderComponent } from './components/HelperComponents/loader/loader.component';
import { httpFactory } from "./service/CoustomeHttpService/httpFactory";
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { SpinnerComponentModule } from 'ng2-component-spinner';
import { UserProfileComponent } from './components/HelperComponents/user-profile/user-profile.component';
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { ForgotPasswordComponent } from './components/SingletonComponent/forgot-password/forgot-password.component';
import {DataTableModule} from "angular2-datatable";
import { LoginRouteComponent } from './components/RouteComponents/login-route/login-route.component';
import { DashboardComponent } from './components/SingletonComponent/dashboard/dashboard.component';
import { FeeRouteComponent } from './components/RouteComponents/fee-route/fee-route.component';
import { FeeComponentComponent } from './components/HelperComponents/fee-component/fee-component.component';
import { ShowFeeComponent } from './components/HelperComponents/show-fee/show-fee.component';
import { CreateOrderComponent } from './components/HelperComponents/create-order/create-order.component';
import { CreateOrderRouteComponent } from './components/RouteComponents/create-order-route/create-order-route.component'; 
import {ProgressBarModule} from "ngx-progress-bar";
import { ProgressBarComponent } from './components/HelperComponents/progress-bar/progress-bar.component';
import { PriceDetailComponent } from './components/HelperComponents/price-detail/price-detail.component';
import { LatestTransactionComponent } from './components/SingletonComponent/latest-transaction/latest-transaction.component';
import { UserListRouteComponent } from './components/RouteComponents/user-list-route/user-list-route.component';
import { UserListComponent } from './components/SingletonComponent/user-list/user-list.component';
import { DepositFormComponent } from './components/HelperComponents/deposit-form/deposit-form.component';
import { DepositRouteComponent } from './components/RouteComponents/deposit-route/deposit-route.component';
import { UserBalanceRouteComponent } from './components/RouteComponents/user-balance-route/user-balance-route.component';
import { UserBalanceComponent } from './components/HelperComponents/user-balance/user-balance.component';
import { DepositTransactionRouteComponent } from './components/RouteComponents/deposit-transaction-route/deposit-transaction-route.component';
import { DepositTransactionComponent } from './components/HelperComponents/deposit-transaction/deposit-transaction.component';
import { Ng2UploaderModule } from 'ng2-uploader';
import { CompanyLogoRouteComponent } from './components/RouteComponents/company-logo-route/company-logo-route.component';
import { CompanyLogoComponent } from './components/SingletonComponent/company-logo/company-logo.component';
import { ApproveKycRouteComponent } from './components/RouteComponents/approve-kyc-route/approve-kyc-route.component';
import { WithdrawRequestRouteComponent } from './components/RouteComponents/withdraw-request-route/withdraw-request-route.component';
import { DepositRequestRouteComponent } from './components/RouteComponents/deposit-request-route/deposit-request-route.component';
import { CompanyProfileRouteComponent } from './components/RouteComponents/company-profile-route/company-profile-route.component';
import { UserProfileRouteComponent } from './components/RouteComponents/user-profile-route/user-profile-route.component';
import { Enable2fRouteComponent } from './components/RouteComponents/enable-2f-route/enable-2f-route.component';
import { ApproveKycComponent } from './components/HelperComponents/approve-kyc/approve-kyc.component';
import { WithdrawRequestComponent } from './components/SingletonComponent/withdraw-request/withdraw-request.component';
import { DepositeRequestComponent } from './components/SingletonComponent/deposite-request/deposite-request.component';
import { CompanyProfileComponent } from './components/SingletonComponent/company-profile/company-profile.component';
//import { UserProfileComponent } from './components/SingletonComponent/user-profile/user-profile.component';
import { TwoFactorPasswordComponent } from './components/SingletonComponent/two-factor-password/two-factor-password.component';
import { UsersprofileComponent } from './components/SingletonComponent/usersprofile/usersprofile.component';
import { KycUpdateComponent } from './components/HelperComponents/kyc-update/kyc-update.component';
import { OrdertsetRouteComponent } from './components/RouteComponents/ordertset-route/ordertset-route.component';
import { UserTransactionComponent } from './components/HelperComponents/user-transaction/user-transaction.component';
import { ManualDepositDetailComponent } from './components/HelperComponents/manual-deposit-detail/manual-deposit-detail.component';
import { CreateCompanyComponent } from './components/SingletonComponent/create-company/create-company.component';
import { CreateUserComponent } from './components/SingletonComponent/create-user/create-user.component';
import { ManageAccountComponent } from './components/SingletonComponent/manage-account/manage-account.component';
import { AddCurrencyComponent } from './components/SingletonComponent/add-currency/add-currency.component';
import { TransactionFeeComponent } from './components/RouteComponents/transaction-fee/transaction-fee.component';

import { FeeRulesComponent } from './components/SingletonComponent/fee-rules/fee-rules.component';
import { CurrencyTypeComponent } from './components/HelperComponents/currency-type/currency-type.component';
import { TradingRulesComponent } from './components/SingletonComponent/trading-rules/trading-rules.component';
import { CurrencyPairComponent } from './components/HelperComponents/currency-pair/currency-pair.component';
import { KycDetailsComponent } from './components/SingletonComponent/kyc-details/kyc-details.component';
import { BroadcastComponent } from './components/SingletonComponent/broadcast/broadcast.component';

import { UserListService } from './service/userlist/user-list.service';
import { OrderService } from './service/order/order.service';
import { RulesService } from './service/rules/rules.service';
import { AnnouncementService } from './service/announcement/announcement.service';
import { BankDetailsService } from './service/bank-details/bank-details.service';
import { AnnouncementListRouteComponent } from './components/RouteComponents/announcement-list-route/announcement-list-route.component';
import { AnnouncementListComponent } from './components/SingletonComponent/announcement-list/announcement-list.component';
import { AddAnnouncementComponent } from './components/SingletonComponent/add-announcement/add-announcement.component';
import { ViewAnnouncementComponent } from './components/SingletonComponent/view-announcement/view-announcement.component';
import { AddAnnouncementRouteComponent } from './components/RouteComponents/add-announcement-route/add-announcement-route.component';
import { ViewAnnouncementRouteComponent } from './components/RouteComponents/view-announcement-route/view-announcement-route.component';
import { RegisterRouteComponent } from './components/RouteComponents/register-route/register-route.component';
import { DashboardRouteComponent } from './components/RouteComponents/dashboard-route/dashboard-route.component';
import { ForgotPasswordRouteComponent } from './components/RouteComponents/forgot-password-route/forgot-password-route.component';
import { AddCurrencyRouteComponent } from './components/RouteComponents/add-currency-route/add-currency-route.component';
import { AccountsListRouteComponent } from './components/RouteComponents/accounts-list-route/accounts-list-route.component';
import { AccountsListComponent } from './components/SingletonComponent/accounts-list/accounts-list.component';
import { AccountDetailRouteComponent } from './components/RouteComponents/account-detail-route/account-detail-route.component';
import { AccountDetailComponent } from './components/SingletonComponent/account-detail/account-detail.component';

const routes: Routes = [
 
{ path: '', component: LoginRouteComponent ,data: {title: 'SignIn' }},
{ path: 'SignUp', component: RegisterComponent , data: {title: 'SignUp' } },
{ path: 'Forgotpassword', component: ForgotPasswordRouteComponent , data: {title: 'Password Reset' } },
{ path: 'Dashboard', component: DashboardRouteComponent,canActivate:[AuthGuard],data: {title: 'Dashboard' } },
{ path: 'SetFee', component: FeeRouteComponent,canActivate:[AuthGuard],data: {title: 'Set Fee' } },
{ path: 'create_order', component: CreateOrderRouteComponent,canActivate:[AuthGuard],data: {title: 'Create Order' } },
{ path: 'user_list', component: UserListRouteComponent,canActivate:[AuthGuard],data: {title: 'User List' } },
{ path: 'deposit', component: DepositRouteComponent,canActivate:[AuthGuard],data: {title: 'Deposit Form' } },
{ path: 'user_balance', component: UserBalanceRouteComponent,canActivate:[AuthGuard],data: {title: 'User Balance' } },
{ path: 'deposit_transaction', component: DepositTransactionRouteComponent,canActivate:[AuthGuard],data: {title: 'Deposit Transaction' } },
{ path: 'logo', component: CompanyLogoRouteComponent,canActivate:[AuthGuard],data: {title: 'Company Logo Form' } },
{ path: 'AddCurrency', component: AddCurrencyRouteComponent,canActivate:[AuthGuard],data: {title: 'Add Currency' } },
{ path: 'aprrove_account', component: ApproveKycRouteComponent,canActivate:[AuthGuard],data: {title: 'Approve Account' } },
{ path: 'withdraw_request', component: WithdrawRequestRouteComponent,canActivate:[AuthGuard],data: {title: 'Withdraw Request' } },
{ path: 'deposit_request', component: DepositRequestRouteComponent,canActivate:[AuthGuard],data: {title: 'Deposit Request' } },
{ path: 'company_profile', component: CompanyProfileRouteComponent,canActivate:[AuthGuard],data: {title: 'Company Profile' } },
{ path: 'user_profile', component: UserProfileRouteComponent,canActivate:[AuthGuard],data: {title: 'User Profile' } },
{ path: 'enable_2f', component: Enable2fRouteComponent,canActivate:[AuthGuard],data: {title: 'Two Factor Authentication' } },
{ path: 'update_kyc', component: KycUpdateComponent,canActivate:[AuthGuard],data: {title: 'Update KYC' } },
{ path: 'test_order', component: OrdertsetRouteComponent,canActivate:[AuthGuard],data: {title: 'Test Order' } },
{ path: 'user_transaction', component: UserTransactionComponent,canActivate:[AuthGuard],data: {title: 'User Transaction' } },
{ path: 'manual_deposit', component: ManualDepositDetailComponent,canActivate:[AuthGuard],data: {title: 'Manual Deposit Detail' } },
{ path: 'company_profile/create_company', component: CreateCompanyComponent,canActivate:[AuthGuard],data: {title: 'Create Company' } },
{ path: 'user_profile/create_user', component: CreateUserComponent,canActivate:[AuthGuard],data: {title: 'Create User' } },
{ path: 'enable_2f/manage_user', component: ManageAccountComponent,canActivate:[AuthGuard],data: {title: 'Manage Account' } },
{ path: 'transaction-fee', component: TransactionFeeComponent,canActivate:[AuthGuard],data: {title: 'Transaction Fee' } },
{ path: 'fee_rules', component: FeeRulesComponent,canActivate:[AuthGuard],data: {title: 'Fee Rules' } },
{ path: 'trading_rules', component: TradingRulesComponent,canActivate:[AuthGuard],data: {title: 'Trading Rules' } },
{ path: 'kyc_details', component: KycDetailsComponent,canActivate:[AuthGuard],data: {title: 'KYC Details' } },
{ path: 'broadcast', component: BroadcastComponent,canActivate:[AuthGuard],data: {title: 'Broadcast' } },
{ path: 'announcement-list', component: AnnouncementListRouteComponent,canActivate:[AuthGuard],data: {title: 'Announcement list' } },
{ path: 'create-announcement', component: AddAnnouncementRouteComponent,canActivate:[AuthGuard],data: {title: 'Create announcement' } },
{ path: 'view-announcement/:id', component: ViewAnnouncementRouteComponent,canActivate:[AuthGuard],data: {title: 'View announcement' } },
{ path: 'accounts-list', component: AccountsListRouteComponent,canActivate:[AuthGuard],data: {title: 'Back Account List' } },
{ path: 'account-detail/:email', component:AccountDetailRouteComponent,canActivate:[AuthGuard],data:{title:'Account Details'}},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
   ValidationMessageComponent,
   LeftsidebarComponent,
   LoaderComponent,
   UserProfileComponent,
   ForgotPasswordComponent,
   LoginRouteComponent,
   DashboardComponent,
   FeeRouteComponent,
   FeeComponentComponent,
   ShowFeeComponent,
   CreateOrderComponent,
   CreateOrderRouteComponent,
   ProgressBarComponent,
   ErrorMessagePopupComponent,
   PriceDetailComponent,
   LatestTransactionComponent,
   UserListRouteComponent,
   UserListComponent,
   DepositFormComponent,
   DepositRouteComponent,
   UserBalanceRouteComponent,
   UserBalanceComponent,
   DepositTransactionRouteComponent,
   DepositTransactionComponent,
   CompanyLogoRouteComponent,
   CompanyLogoComponent,
   ApproveKycRouteComponent,
   WithdrawRequestRouteComponent,
   DepositRequestRouteComponent,
   CompanyProfileRouteComponent,
   UserProfileRouteComponent,
   Enable2fRouteComponent,
   ApproveKycComponent,
   WithdrawRequestComponent,
   DepositeRequestComponent,
   CompanyProfileComponent,
   TwoFactorPasswordComponent,
   UsersprofileComponent,
   KycUpdateComponent,
   OrdertsetRouteComponent,
   UserTransactionComponent,
   ManualDepositDetailComponent,
   CreateCompanyComponent,
   CreateUserComponent,
   ManageAccountComponent,
   AddCurrencyComponent,
   TransactionFeeComponent,
   FeeRulesComponent,
   CurrencyTypeComponent,
   TradingRulesComponent,
   CurrencyPairComponent,
   KycDetailsComponent,
   BroadcastComponent,
   AnnouncementListRouteComponent,
   AnnouncementListComponent,
   AddAnnouncementComponent,
   ViewAnnouncementComponent,
   AddAnnouncementRouteComponent,
   ViewAnnouncementRouteComponent,
   RegisterRouteComponent,
   DashboardRouteComponent,
   ForgotPasswordRouteComponent,
   AddCurrencyRouteComponent,
   AccountsListRouteComponent,
   AccountsListComponent,
   AccountDetailRouteComponent,
   AccountDetailComponent,
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
      DataTableModule,AmChartsModule,
      ProgressBarModule,
      Ng2UploaderModule,
    ],

providers: [OrderServiceService,FeeServiceService,AuthGuard,HttpEmitterService,SignalRService,SlimLoadingBarModule,ValidationmessageserviceService, SharedService, RegisterService,LoaderService,UserListService,OrderService,RulesService,BankDetailsService,AnnouncementService, 
   {
        provide: Http,
        useFactory: httpFactory,
        deps: [XHRBackend, RequestOptions,LoaderService,]
    },
    {
        provide: LocationStrategy,
        useClass: HashLocationStrategy,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
