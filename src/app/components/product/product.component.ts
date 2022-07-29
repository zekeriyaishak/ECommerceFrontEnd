import { CartService } from './../../services/cart.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
//productComponenti açıldığında yerleşilen kod
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded = false;
  filterText = "";

  constructor(private productService:ProductService , private activatedRoute:ActivatedRoute,
     private toastrService:ToastrService,
     private cartService:CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"])
      }
      else{
        this.getProducts();
      }
    })
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

  getProductsByCategory(categoryId:number) {
    this.productService.getProductsByCategory(categoryId).subscribe(response=>{
      this.products= response.data
      this.dataLoaded = true;
    });
  }

  addToCart(product:Product){
    this.toastrService.success("Sepete eklendi",product.productName)
    this.cartService.addToCart(product);
  }
}
