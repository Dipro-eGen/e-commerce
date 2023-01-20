import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AdminPanelService} from "../../admin/admin-panel/admin-panel-service";
import {ProductDto} from "../../../dto/product-dto";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productId: string;
  product: ProductDto;
  constructor(private route: ActivatedRoute,
              private adminPanelService:AdminPanelService) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.queryParams["id"];
    this.getProduct(this.productId)

  }

  getProduct(id: string){
    this.adminPanelService.getProductById(id)
      .subscribe(e=>{
        this.product = e;
      })
  }

}
