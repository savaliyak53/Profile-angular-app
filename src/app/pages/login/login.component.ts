import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { LoginService } from '../../service/login/login.service';
import { _UserData } from '../signup/signup';
import { delay } from 'rxjs';

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

  constructor(private loginService: LoginService) {}

  OnloginFormSubmitted() {
    if (this.loginForm?.value) {
      this.loginService
        .loginUser(this.loginForm.value)
        .pipe(delay(100))
        .subscribe((ref) => {
          this.userData = ref;
        });
    }
  }
}
