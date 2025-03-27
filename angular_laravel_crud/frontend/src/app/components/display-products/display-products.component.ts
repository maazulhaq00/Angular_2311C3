import { Component, inject } from '@angular/core';
import { HttpService } from '../../http.service';
import { IProduct } from '../../interfaces/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-products',
  imports: [CommonModule],
  templateUrl: './display-products.component.html',
  styleUrl: './display-products.component.css'
})
export class DisplayProductsComponent {

  productsList: IProduct[] = []

  httpService = inject(HttpService);

  ngOnInit(){
    this.httpService.getAllProducts().subscribe((result)=>{

      console.log(result);
      this.productsList = result;
      console.log(this.productsList);
      
    })
  }

}
