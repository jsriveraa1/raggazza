import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';



@NgModule({
    declarations: [
        PurchaseOrderComponent
    ],
    exports: [
        PurchaseOrderComponent
    ],
    imports: [
        CommonModule
    ]
})
export class PurchaseModule { }
