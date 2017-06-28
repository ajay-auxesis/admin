import { OrderLisRowComponent } from './../order-lis-row/order-lis-row.component';
import { orderListModel } from './../../../models/LTCUSDOrderModel';
import { Injectable, ComponentFactoryResolver, ViewContainerRef, ComponentRef, ReflectiveInjector } from '@angular/core';

@Injectable()
export class DynamicOrderRowService {

 constructor (private componentFactoryResolver: ComponentFactoryResolver) { }

  public CreateOrderRowComponent (vCref: ViewContainerRef, modelInput: orderListModel):ComponentRef<any> { {

    let factory = this.componentFactoryResolver.resolveComponentFactory(OrderLisRowComponent);

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