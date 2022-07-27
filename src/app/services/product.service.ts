import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ListResponseModel } from '../models/ListResponseModel';

//Enjekte edilecek servis
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:7101/api/"

  constructor(private httpClient: HttpClient) { }

  //Angularda tanımlı httpclient ile apiye bağlanıyoruz
  //httpclient ile istek yap. gele datayı  abone et. gelen response için 
  getProducts():Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "products/getbycategory?categoryId=" +categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

}
