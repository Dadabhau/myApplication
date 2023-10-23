import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../Interface/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>('https://fakestoreapi.com/products');
  }
  getProductsCategory(data: any): Observable<Products[]> {
    return this.http.get<Products[]>(
      'https://fakestoreapi.com/products/category/' + data
    );
  }
  getUsers(): Observable<Products[]> {
    return this.http.get<Products[]>('https://fakestoreapi.com/users');
  }

  getProductsSearch(searchTerm: any): Observable<Products[]> {
    return this.http.get<Products[]>(
      'https://fakestoreapi.com/products?q=' + searchTerm
    );
  }
}
