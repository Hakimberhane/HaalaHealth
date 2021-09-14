
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AuthService } from './services/auth.service';
import { Subscription } from 'rxjs/Subscription';
 
@Injectable()
export class AuthResolve implements Resolve<any> {
 constructor(private  authService: AuthService){}
 resolve(route:ActivatedRouteSnapshot, 
        state:RouterStateSnapshot,
       ): Observable<any> {
    return this.authService.isLoggedIn();  
  }
}