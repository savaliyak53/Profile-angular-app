import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from '../../service/login/login.service';
import { _UserData } from '../signup/signup';
import { Router, Routes } from '@angular/router';
import { delay } from 'rxjs';
import { _Login } from '../user/uset';
import { RedirectService } from '../../service/redirect/redirect.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm: NgForm | undefined;
  userName: string = '';
  password: string = '';
  userData: _UserData | undefined;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private redirectService: RedirectService
  ) {}

  OnloginFormSubmitted() {
    if (this.loginForm?.value) {
      this.userData = this.loginService.loginUser(this.loginForm.value);

      if (this.userData) {
        const redirect: string = this.redirectService.getRedirectUrl();
        this.router.navigateByUrl(redirect);
      }
    }
  }
}
