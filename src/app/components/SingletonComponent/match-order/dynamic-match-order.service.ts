import { MatchListComponent } from './../match-list/match-list.component';
import { matchorderModel } from './../../../models/LTCUSDOrderModel';
import { Injectable, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ReflectiveInjector } from '@angular/core';

@Injectable()
export class DynamicMatchOrderService {

 constructor (private componentFactoryResolver: ComponentFactoryResolver) { }

  public CreateMatchOrderComponent (vCref: ViewContainerRef, modelInput: matchorderModel):ComponentRef<any> { {

    let factory = this.componentFactoryResolver.resolveComponentFactory(MatchListComponent);

    // vCref is needed cause of that injector..
  // vCref is needed cause of that injector..
    let injector = ReflectiveInjector.fromResolvedProviders([], vCref.parentInjector);

    // create component without adding it directly to the DOM
    let comp = factory.create(injector);

    // add inputs first !! otherwise component/template crashes ..
  comp.instance.order= modelInput;

    // all inputs set? add it to the DOM ..
   // vCref.insert(comp.hostView);

     return comp;
  }

}
}
