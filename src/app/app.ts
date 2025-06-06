import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from "./components/product-list/product-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'tspark-product-ui';
}
