import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';


import { Observable } from 'rxjs/Observable';

import { AuthService } from './services/auth.service';

import { Subscription } from 'rxjs/Subscription';
 

@Injectable()
export class AuthResoloverService implements Resolve<Observable<any>> {

  constructor(private authService:AuthService) { }


  resolve():Observable<any>{
   // return this.authService.isEnabled();


  }


}
