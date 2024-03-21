// Youtube reference :-procademy

import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { SignupService } from '../../service/signup/signup.service';
import { routerHref } from '../../../environments/environments.development';
import { delay } from 'rxjs';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  @ViewChild('registrationForm') form: NgForm | undefined;
  firstName: string = '';
  lastName: string = '';
  emailAddress: string = '';
  phoneNumber: string = '';
  sex: string = '';
  regionName: string = '';
  cityName: string = '';
  zip: string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  home: string = '/';

  constructor(private router: Router, private signupService: SignupService) {}

  // it is also use full
  // OnFormSubmitted = (registrationForm: HTMLFormElement) => {
  //   console.log(registrationForm);
  // };

  allFieldsCleared(form: any): boolean {
    return Object.values(form.value).every((value) => !value);
  }

  OnFormSubmitted = () => {
    if (this.form?.value) {
      this.signupService
        .createUser(this.form.value)
        .pipe(delay(100))
        .subscribe((ref) => {
          console.log(ref);
        });
    }

    this.form?.reset();
    this.form?.setValue({
      ...this.form.value,
      address: {
        ...this.form.value['address'],
        country: 'IND',
      },
    });
  };

  generateUname = () => {
    const uname =
      this.firstName.slice(0, this.firstName.length - 2) +
      this.lastName.slice(0, this.lastName.length - 2) +
      Math.floor(Math.random() * 100 + 10 - 1);

    this.form?.setValue({
      ...this.form.value,
      username: uname,
      address: {
        ...this.form.value['address'],
        country: 'india',
      },
    });
  };

  resetForm = (): boolean => {
    this.form?.resetForm();
    return true;
  };
}
