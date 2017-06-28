import { Injectable } from '@angular/core';
import { Output,EventEmitter} from '@angular/core';


@Injectable()
export class HttpEmitterService {
  
@Output() ErrorMessageEmitter : EventEmitter<any> = new EventEmitter();

  constructor() { }

  emittError(msg){
    this.ErrorMessageEmitter.emit(msg);
  }

}
