import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
//productComponenti açıldığında yerleşilen kod
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded = false;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  
  getProducts() {
    //neden subscribe lazım? - backend apisi ile çalışıyorsan 
    //23.satırdaki asenkron çalışıyor.
    this.productService.getProducts().subscribe(response=>{
      this.products= response.data
      //senkron olması için koydum
      this.dataLoaded = true;
    });
  }
}
