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

  addProduct(id:number, value: number, button: HTMLButtonElement): void {
    this.knowValueShopping = true;
    this.listProducts.push(new ListProductsModel(id, value))
    sessionStorage.setItem("products", this.listProducts.join());
    button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">\n' +
      '  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>\n' +
      '</svg><span> Añadido</span>'
    button.disabled = true;

  }

}
