import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Auth, authState } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';
import { AppUser } from './models/app-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$ : Observable <User | null>

  constructor(private auth: Auth, private route: ActivatedRoute, private userService: UserService) {
    this.user$ = authState(this.auth); 
   }

  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    
    signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout() {
    this.auth.signOut();
  }

  get appUser$(): Observable<AppUser | null> {
    return this.user$.pipe(
      switchMap(user =>
        user?.uid
          ? this.userService.get(user.uid)
          : of(null)
      )
    );
  }

}
