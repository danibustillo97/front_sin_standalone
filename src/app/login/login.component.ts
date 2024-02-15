import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string | undefined;
  password!: string;

  constructor() {}

  login() {
    console.log(this.email);
    console.log(this.password);
  }
}
