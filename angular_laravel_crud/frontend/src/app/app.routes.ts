import { Routes } from '@angular/router';
import { DisplayProductsComponent } from './components/display-products/display-products.component';
import { CreateProductComponent } from './components/create-product/create-product.component';

export const routes: Routes = [
    {
        path: "",
        component: DisplayProductsComponent
    }, 
    {
        path: "all-prod",
        component: DisplayProductsComponent
    },
    {
        path: "add-prod",
        component: CreateProductComponent
    },
];
