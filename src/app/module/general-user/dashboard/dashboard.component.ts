import { Component, OnInit } from '@angular/core';
import {ProductDto} from "../../../dto/product-dto";
import {AdminPanelService} from "../../admin/admin-panel/admin-panel-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  productList: Array<ProductDto>;

  constructor(private adminPanelService:AdminPanelService,
              private router: Router,) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(){
    this.adminPanelService.getAllProducts()
      .subscribe((res:Array<ProductDto>)=>{
        this.productList = [...res];
        console.log(res)
      })
  }

  navigateToProductDetails(id: string) {
    const url = 'http://localhost:4200/user/product-details?id=' + id;
    window.open(url, '_blank');
  }


  navigateToLogin() {
    this.router.navigateByUrl('/');
  }
}
