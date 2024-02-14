import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly baseUrl = 'https://fakestoreapi.com'
  
  constructor(private _http: HttpClient) { }

  fetch(){
    return this._http.get(`${this.baseUrl}/products`)
  }

  getCategory(){
    return this._http.get(`${this.baseUrl}/products/categories`)
  }

}
