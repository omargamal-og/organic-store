import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BsNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private userService: UserService, private auth: AuthService, router: Router) {

    auth.user$.subscribe(user => {

      if (!user) return;

        this.userService.save(user);

        const returnUrl = localStorage.getItem('returnUrl');
        if (!returnUrl) return;

        localStorage.removeItem('returnUrl');
        router.navigateByUrl(returnUrl);
    });
  }
}
