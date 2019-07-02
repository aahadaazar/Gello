import { PlatformLocation } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Subject } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private http: HttpService
  ) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    // console.log('------ RUNNING AUTH GUARD -----');
    const authenticated = this.http.isAuthenticated(route.queryParams.token);
    const subject = new Subject<boolean>();
    const self = this;
    authenticated.subscribe(
      (res) => {
        // console.log(res.data);
        this.http.setAuthenticatedUser(res.data.token, res.data.user);
        subject.next(true);
      },
      (err) => {
        // console.log(state);
        localStorage.clear();
        if (state.url !== '/auth/login') {
          subject.next(false);
          window.location.reload();
          return;
        } else {
          subject.next(true);
          return;
        }
      }
    );
    return subject.asObservable();
  }
}
