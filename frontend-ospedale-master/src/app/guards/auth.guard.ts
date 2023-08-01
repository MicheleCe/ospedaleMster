import { Injectable } from '@angular/core';
import { CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';



export function authGuardFn(role: string): CanActivateFn {
  return () => {
    const authService = inject(AuthService)
    const router = inject(Router);
    if (authService.hasRole(role)) {
      return true;
    }
    router.navigate(['login']);
    return false;
  }
}
  

