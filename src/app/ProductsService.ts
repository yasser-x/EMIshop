import {Injectable, Injector} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ProductsService{
  private ApiUrl = 'https://dummyjson.com/products';
  private categoriesUrl= "https://dummyjson.com/products/categories" ;
  constructor(private http:HttpClient) {
  }

  getProducts(){
    return this.http.get(this.ApiUrl);
  }

  getCategories(){
    return this.http.get(this.categoriesUrl);
  }

  searchProducts(querry:string){
      return this.http.get(`${this.ApiUrl}?search=${encodeURIComponent(querry)}`);
  }
}
