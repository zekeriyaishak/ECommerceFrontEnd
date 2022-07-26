import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponseModel } from '../models/productResponseModel';

//Enjekte edilecek servis
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:7101/api/products/getall"

  constructor(private httpClient: HttpClient) { }

  //Angularda tanımlı httpclient ile apiye bağlanıyoruz
  //httpclient ile istek yap. gele datayı  abone et. gelen response için 
  getProducts():Observable<ProductResponseModel> {
    return this.httpClient.get<ProductResponseModel>(this.apiUrl);
  }

}
