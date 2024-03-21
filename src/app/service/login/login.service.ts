import { EventEmitter, Injectable } from '@angular/core';
import { dummyJson } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable, delay } from 'rxjs';
import { _UserData } from '../../pages/signup/signup';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = `${dummyJson}/auth/login`;
  userData: any;
  // private tokenSubject = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) {}

  loginUser(data: { username: string; password: string }): _UserData {
    this.http
      .post(this.url, data)
      .pipe(delay(100))
      .subscribe((ref) => {
        this.userData = ref;
      });

    this.userData &&
      localStorage.setItem('token', JSON.stringify(this.userData));
    // this.userData && this.onLoginSuccess.emit(this.userData);
    return this.userData;
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
    console.log('Auth token');
    return !!this.getToken();
  }
}
