import {Injectable} from '@angular/core';
import {ProductDto} from "../../../dto/product-dto";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn:"root"})

export class AddProductService {

  constructor(private http: HttpClient) {}

  saveProduct(productDto: ProductDto): Observable<Object> {
    // @ts-ignore
    return this.http.post('http://localhost:3000/products',productDto);
  }


}
