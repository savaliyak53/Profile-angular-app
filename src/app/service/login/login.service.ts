import { Injectable, EventEmitter } from '@angular/core';
import { dummyJson } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { _UserData } from '../../pages/signup/signup';
import { RedirectService } from '../redirect/redirect.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = `${dummyJson}/auth/login`;
  userData: any;
  // private tokenSubject = new BehaviorSubject<string | null>(null);

  constructor(
    private http: HttpClient,
    private redirectService: RedirectService,
    private router: Router
  ) {}

  onLoginSuccess: EventEmitter<_UserData> = new EventEmitter<_UserData>();

  loginUser(data: { username: string; password: string }) {
    this.http.post(this.url, data).subscribe((ref) => {
      this.userData = ref;
      if (ref) {
        const redirect: string = this.redirectService.getRedirectUrl();
        localStorage.setItem('token', JSON.stringify(ref));
        this.onLoginSuccess.emit(this.userData);
        this.router.navigateByUrl(redirect);
      }
    });
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
