import { Injectable } from '@angular/core';
import { dummyJson } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { _UserData } from '../../pages/signup/signup';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = `${dummyJson}/auth/login`;
  // private tokenSubject = new BehaviorSubject<string | null>(null);

  // get token$(): Observable<string | null> {
  //   return this.tokenSubject.asObservable();
  // }

  constructor(private http: HttpClient) {
    // this.tokenSubject.next(localStorage.getItem('token'));
  }

  loginUser(data: { username: string; password: string }): Observable<any> {
    return this.http.post(this.url, data);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
