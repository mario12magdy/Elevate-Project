import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor( private _HttpClient:HttpClient ) { }

  getProductss():Observable<any>{
    return this._HttpClient.get(`https://fakestoreapi.com/products`)
  }
}
