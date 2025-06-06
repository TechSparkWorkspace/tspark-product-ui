import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private mockProducts: Product[] = [
    { id: 1, name: 'Laptop', price: 999, inStock: true },
    { id: 2, name: 'Keyboard', price: 49, inStock: true },
    { id: 3, name: 'Mouse', price: 25, inStock: false },
  ];

  getProducts(): Observable<Product[]> {
    return of(this.mockProducts);
  }
}
