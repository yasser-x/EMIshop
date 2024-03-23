import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../ProductsService";
import {HttpErrorResponse} from "@angular/common/http";
import {Product} from "../model/product";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  products:Array<any>=[];
  categories:Array<any>=[];
  querry:string='' ;
  constructor(private productsService : ProductsService) {
  }

  ngOnInit() {
    this.getProducts();
    this.getCategories();
  }
  getProducts(){
    this.productsService.getProducts().subscribe(
      (data: any): void =>{
        this.products = data.products;
        console.log(data)
      }, (error: HttpErrorResponse): void => {
        alert(error.message);
      }
    );
  }

  getCategories(){
    this.productsService.getCategories().subscribe(
      (data: any): void =>{
        this.categories = data;
        console.log(data)
      }, (error: HttpErrorResponse): void => {
        alert(error.message);
      }
    )

  }

  searchProducts(){
    if (this.querry.trim()!=''){
      this.productsService.searchProducts(this.querry).subscribe(
        (data: any): void =>{
          this.products = data.products;
          console.log(data)
        }, (error: HttpErrorResponse): void => {
          alert(error.message);
        }
      );
    }

  }



}
