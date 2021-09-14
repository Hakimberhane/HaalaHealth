import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

constructor(private angularFireAuth: AngularFireAuth) {
    this.userData = angularFireAuth.authState;
}  

/* Sign up */
SignUp(email: string, password: string) {
		this.angularFireAuth
		.auth
		.createUserWithEmailAndPassword(email, password)
		.then(res => {
	    	console.log('You are Successfully signed up!', res);
		})
		.catch(error => {
	    	console.log('Something is wrong:', error.message);
		});
}

}



