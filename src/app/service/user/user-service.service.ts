import { Injectable } from '@angular/core';
import { _User } from '../../pages/user/uset';
import { HttpClient } from '@angular/common/http';
import { jsonPlaceholder } from '../../../environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  clienteUrl = `${jsonPlaceholder}/users`;
  constructor(private http: HttpClient) {}

  getProduct() {
    return this.http.get<_User>(this.clienteUrl);
  }
}
