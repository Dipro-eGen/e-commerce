import { Component, OnInit } from '@angular/core';
import {AdminPanelService} from "./admin-panel-service";
import {ProductDto} from "../../../dto/product-dto";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {AddProductComponent} from "../add-product/add-product.component";




@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  productList: Array<ProductDto>;

  constructor(private adminPanelService:AdminPanelService,
              public dialog: MatDialog,
              private router: Router,) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(){
    this.adminPanelService.getAllProducts()
      .subscribe((res:Array<ProductDto>)=>{
        this.productList = res;
      })
  }

  onEdit(product: ProductDto) {

  }

  onDelete(id: string) {
    this.adminPanelService.deleteProductById(id)
      .subscribe(e=>{
        location.reload();
      })
  }

  openDialog() {
    this.dialog.open(AddProductComponent);
  }

  navigateToLogin() {
    this.router.navigateByUrl('/');
  }
}
