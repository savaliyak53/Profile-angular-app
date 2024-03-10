// Youtube reference :-procademy

import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
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

  constructor(private router: Router) {}

  // it is also use full
  // OnFormSubmitted = (registrationForm: HTMLFormElement) => {
  //   console.log(registrationForm);
  // };

  allFieldsCleared(form: any): boolean {
    return Object.values(form.value).every((value) => !value);
  }

  OnFormSubmitted = () => {
    console.log(this.allFieldsCleared(this.form));
    console.log(this.form, 'Form');
  };
}
