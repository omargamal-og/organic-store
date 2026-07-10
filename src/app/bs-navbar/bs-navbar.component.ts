import { AppUser } from './../models/app-user';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'bs-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './bs-navbar.component.html',
  styleUrl: './bs-navbar.component.css'
})
export class BsNavbarComponent {
  appUser: AppUser | null = null;

  constructor(private auth : AuthService) {
    auth.appUser$.subscribe(appUser => this.appUser = appUser)
  }

  logout() {
    this.auth.logout();
  }

}
