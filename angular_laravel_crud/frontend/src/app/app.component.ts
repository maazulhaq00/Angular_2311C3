import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DisplayProductsComponent } from './components/display-products/display-products.component';
import { CreateProductComponent } from './components/create-product/create-product.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, DisplayProductsComponent, CreateProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
