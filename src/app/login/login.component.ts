import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private auth: AuthService) {}

  login() {
    this.auth.login();
  }
}
