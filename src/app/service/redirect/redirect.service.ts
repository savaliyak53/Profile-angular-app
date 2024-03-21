import { Injectable } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RedirectService {
  private redirectUrl: string = '';

  setRedirectUrl(url: string, state: RouterStateSnapshot): void {
    console.log(state, 'form aut gaurd');
    console.log(url);
    this.redirectUrl = url;
  }

  getRedirectUrl(): string {
    return this.redirectUrl;
  }

  clearRedirectUrl(): void {
    this.redirectUrl = '';
  }
}
