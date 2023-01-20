import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AddProductService} from "./add-product-service";
import {ProductDto} from "../../../dto/product-dto";


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productFg: FormGroup = this.fb.group({
    productName: [null, Validators.required],
    imageUrl: [null,Validators.required],
    price: [null,Validators.required],
    brand: [null,Validators.required],
    description: [null],
  });
  constructor( private fb:FormBuilder,
               private addProductService:AddProductService) { }

  ngOnInit(): void {
  }

  addProduct() {
    const productDto: ProductDto = new ProductDto({
      productName: this.productFg.value['productName'],
      imageUrl: this.productFg.value['imageUrl'],
      price: this.productFg.value['price'],
      brand: this.productFg.value['brand'],
      description: this.productFg.value['description'],
    })
    this.addProductService.saveProduct(productDto)
      .subscribe(e=>{
        this.productFg.reset();
        location.reload();
        //console.log(e);
      });
  }
}
