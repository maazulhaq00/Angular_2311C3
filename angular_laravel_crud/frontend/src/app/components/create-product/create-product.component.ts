import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../interfaces/product';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-create-product',
  imports: [FormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {

  httpService = inject(HttpService);

  product : IProduct = {
    id : 0,
    prodName : "",
    prodPrice : "",
    prodDesc : "", 
    created_at : null,
    updated_at : null
  }

  createProduct(){
    console.log(this.product);

    this.httpService.createProduct(this.product).subscribe(()=>{
      console.log("Product Added");
      
    })
    
  }

}
