import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from '../../service/login/login.service';
import { _UserData } from '../signup/signup';
import { Router, Routes } from '@angular/router';
import { _Login } from '../user/uset';

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

  constructor(private loginService: LoginService, private router: Router) {}

  OnloginFormSubmitted() {
    if (this.loginForm?.value) {
      this.loginService.loginUser(this.loginForm.value);
    }
  }
}
