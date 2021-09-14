import { Component,NgZone,Injectable, OnInit , Output, EventEmitter} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder,FormControl,Validators} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable,Subject,Subscription } from "rxjs";

import { ShareddataserviceService } from 'src/app/services/shareddataservice.service';

import { PatientlistComponent } from './patientlist/patientlist.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subject = new Subject<any>();
  public subscription: Subscription;

  isLoggedIn:Boolean;
  email:string;
  password:string;

  loginForm = new FormGroup({
     email: new FormControl('', [Validators.required, Validators.email]),
     password: new FormControl('', [Validators.required,Validators.minLength(6)]),

  });

  constructor(private angularFireAuth:AngularFireAuth,private router: Router, private activatedroute: ActivatedRoute,private shareddataserviceService:ShareddataserviceService ) {   

       this.angularFireAuth.authState.subscribe(user => {
          if (user) {
            this.userData = user;
            localStorage.setItem('user', JSON.stringify(this.userData));
            JSON.parse(localStorage.getItem('user'));
            console.log(this.userData);
           this.router.navigate(['/doctorhomepage'],{ queryParams: {uid: this.userData.uid}});
          } else {
            localStorage.setItem('user', null);
            JSON.parse(localStorage.getItem('user'));
          }
        })
  }

  ngOnInit() {
      this.activatedroute.snapshot.data;      
  }

  getUserEmail(): Observable<any> {
      return this.subject.asObservable();
  }

  SignUp() {

  		this.angularFireAuth
  		.createUserWithEmailAndPassword(this.email, this.password)
  		.then(res => {
  	    	this.router.navigate(['/doctorhomepage']);
  		})
  		.catch(error => {
  	    	console.log('Something is wrong:', error.message);
  		});
   }

  SignIn() {

      this.angularFireAuth.signInWithEmailAndPassword(this.loginForm.get("email").value, this.loginForm.get("password").value)
        .then(res => {
          console.log('You are Successfully signed in!');
          console.log(res);
          this.shareddataserviceService.subject.next({ text:res.user.email});

        }).catch(error => {
          window.alert(error.message)
      });

     this.angularFireAuth.authState.subscribe(user => {
        if (user) {
          this.userData = user;
          localStorage.setItem('user', JSON.stringify(this.userData));
          JSON.parse(localStorage.getItem('user'));
        } else {
          localStorage.setItem('user', null);
          JSON.parse(localStorage.getItem('user'));
        }
      })
     this.router.navigate(['/doctorhomepage'],{ queryParams: {uid: this.userData.uid}});
  }
}

