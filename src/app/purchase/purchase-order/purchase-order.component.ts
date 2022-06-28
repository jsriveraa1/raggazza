import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ListProductsModel} from "../model/list-products.model";

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {

  knowValueButton: boolean;
  knowValueShopping: boolean;

  purchaseForm!: FormGroup;

  listProducts: Array<ListProductsModel> = [];

  constructor(private formBuilder: FormBuilder) {
    this.knowValueButton = false;
    this.knowValueShopping = false;
  }

  ngOnInit(): void {
    this.purchaseForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      ciudad: ['', Validators.required],
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(10)]]
    })
  }

  siguiente() {
    if (this.purchaseForm.valid) this.knowValueButton = true;
    else {
      console.log('Formulario invalido');
      this.purchaseForm.get('nombre')?.markAsTouched()
      this.purchaseForm.get('ciudad')?.markAsTouched();
      this.purchaseForm.get('direccion')?.markAsTouched();
      this.purchaseForm.get('telefono')?.markAsTouched();
    }
  }

  addProduct(id:number, value: number): void {
    this.knowValueShopping = true;
    this.listProducts.push(new ListProductsModel(id, value))
    sessionStorage.setItem("products", this.listProducts.join());
  }

}
