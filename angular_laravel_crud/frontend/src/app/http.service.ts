import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IProduct } from './interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseURL='http://127.0.0.1:8000/api'
  httpClient = inject(HttpClient)

  constructor() { }

  getAllProducts(){
    return this.httpClient.get<IProduct[]>(this.baseURL + '/products')
  }
}
