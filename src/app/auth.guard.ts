import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state: RouterStateSnapshot) => {

  const auth = inject(AuthService);
  const router = inject(Router);

  return auth.user$.pipe(
    map(user => {
      if (user) return true;

      router.navigate(['/login'], { queryParams: { returnUrl: state.url } });  
      return false;
    })
  );
};

