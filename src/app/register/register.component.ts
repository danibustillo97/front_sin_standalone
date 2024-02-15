import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  name: string = '';
  email: string = '';
  confirmPassword: string = '';


  constructor(private firestore: FirebaseService) {}
  onSubmit() {
    console.log('submit');
    this.firestore.addUsuario({ username: this.username, password: this.password, name: this.name, email: this.email});
    console.log('Agregado');
    alert('Usuario agregado');
  }

  register() {
    console.log(this.email);
    console.log(this.password);
  }
}
