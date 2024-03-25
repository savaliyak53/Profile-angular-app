import { Injectable } from '@angular/core';
import { dummyJson } from '../../../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = dummyJson;
  constructor(private http: HttpClient) {}

  getAllProduct(): Observable<any> {
    return this.http.get(`${this.url}/products`);
  }
}
