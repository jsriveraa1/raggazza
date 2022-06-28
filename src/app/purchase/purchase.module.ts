import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PurchaseOrderComponent} from './purchase-order/purchase-order.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PurchaseOrderComponent
  ],
  exports: [
    PurchaseOrderComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class PurchaseModule {
}
