import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayProductsComponent } from './components/display-products/display-products.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DisplayProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
