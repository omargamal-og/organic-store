import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { AuthService } from './auth.service';
import { UserService } from './user.service';

export const adminGuard: CanActivateFn = () => {

  const auth = inject(AuthService);
  const userService = inject(UserService);
  const router = inject(Router);

  return auth.user$.pipe(

    switchMap(user => {

      if (!user) {

        router.navigate(['/login']);

        return of(false);
      }

      return userService.get(user.uid);

    }),

    map((appUser: any) => {

      if (appUser?.isAdmin)
        return true;

      router.navigate(['/']);

      return false;

    })

  );

};