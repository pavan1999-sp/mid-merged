import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  httpOptions:any;
  constructor(private hc:HttpClient) { }

  productsData():Observable<any>{
    return this.hc.get("http://localhost:5100/products")
  }


}
