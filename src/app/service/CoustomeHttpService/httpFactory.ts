import { LoaderService } from './../loader-service.service';
import { InterceptedHttp } from './InterceptedHttp ';
import {XHRBackend, Http, RequestOptions} from "@angular/http";
import { HttpEmitterService } from "app/service/CoustomeHttpService/http-emitter.service";



export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions,loaderservice:LoaderService,emitterservice : HttpEmitterService): Http {
    return new InterceptedHttp(xhrBackend, requestOptions,loaderservice,emitterservice);
}