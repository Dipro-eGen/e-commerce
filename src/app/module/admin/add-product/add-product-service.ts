import {Injectable} from '@angular/core';
import {ProductDto} from "../../../dto/product-dto";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn:"root"})
export class AdminPanelService {

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Array<ProductDto>> {
    // @ts-ignore
    return this.http.get('http://localhost:3000/products');
  }


}
