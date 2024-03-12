import { Injectable } from '@angular/core';
import { dummyJson } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { _SignupData } from '../../pages/signup/signup';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  url = `${dummyJson}/users/add`;
  constructor(private http: HttpClient) {}

  createUser(data: _SignupData): Observable<any> {
    return this.http.post<_SignupData>(this.url, data);
  }
}
