import { Injectable } from '@angular/core';
import { Database, objectVal, ref, update } from '@angular/fire/database';
import { User } from '@angular/fire/auth';
import { AppUser } from './models/app-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: Database) { }

  save(user: User) {

    const userRef = ref(this.db, 'users/' + user.uid);

    return update(userRef, {
      name: user.displayName,
      email: user.email
    });

  }

  get(uid: string): Observable<AppUser | null> {

    const userRef = ref(this.db, 'users/' + uid);

    return objectVal(userRef) as Observable<AppUser | null>;

  }

}
