import { Injectable } from '@angular/core';
import { dummyJson } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { _UserData } from '../../pages/signup/signup';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = `${dummyJson}/auth/login`;
  constructor(private http: HttpClient) {}

  loginUser(data: { username: string; password: string }): Observable<any> {
    return this.http.post(this.url, data);
  }
}
