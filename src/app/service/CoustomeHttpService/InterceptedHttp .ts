import { HttpEmitterService } from './http-emitter.service';
import { LoaderService } from './../loader-service.service';
import { Output,EventEmitter} from '@angular/core';
import {Injectable} from "@angular/core";
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";



@Injectable()
export class InterceptedHttp extends Http {


    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private loaderService: LoaderService,private emitterservice : HttpEmitterService) {
        super(backend, defaultOptions);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
     this.loaderService.displayLoader(true);
     url = this.updateUrl(url);
    return super.get(url, this.getRequestOptionArgs(options)).catch(this.handleError);
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        this.loaderService.displayLoader(true);
        url = this.updateUrl(url);
        return super.post(url, body, this.getRequestOptionArgs(options)).catch(this.handleError);
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.updateUrl(url);
        return super.put(url, body, this.getRequestOptionArgs(options)).catch(this.handleError);
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.updateUrl(url);
        return super.delete(url, this.getRequestOptionArgs(options)).catch(this.handleError);
    }
    
    private updateUrl(req: string) {
        return  req;
    }

    private getRequestOptionArgs(options?: RequestOptionsArgs) : RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        let token:string= localStorage.getItem("_cashaacryptoAcessToken");
        options.headers.append('Content-Type', 'application/json');
        options.headers.append('Authorization', `Basic ${token}`);
        return options;
    }
private handleError (error: Response):Observable<Response> {

// this.emitterservice.emittError(error.status);
    //     if(error.status==401){
    //        // console.error('invalid User');
    //       errorMessage="You are Invalid User"; 
                
    //     } 
    //     if(error.status==402){
    //            // console.log('not enough balance');
    //           errorMessage="You have not enough balance for this operation"; 
               
    //       }

    //    //y   this.ErrorMessageEmitter.emit(errorMessage);
         
        return Observable.throw(error);
    }

}