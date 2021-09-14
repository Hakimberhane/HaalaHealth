import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { BrowserModule } from '@angular/platform-browser';
import { Observable,Subscription } from "rxjs";


import { ShareddataserviceService } from 'src/app/services/shareddataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  email:string;
  public subscription: Subscription;
  public user: string;

  constructor(private angularFireAuth:AngularFireAuth,private router: Router,private shareddataserviceService:ShareddataserviceService ) {

     this.user = JSON.parse(localStorage.getItem('user'));
     if(this.user) {
        this.email = this.user.email;
     } else {
     	console.log("there is no user logged in");
     }

    this.subscription = this.shareddataserviceService.getUserEmail().subscribe(obj => {
      if (obj) {
        this.email = obj.text;
      } else {
         console.log("Error getting user email");
       }
      });


 }

 public ngOnInit(): void {

   this.subscription = this.shareddataserviceService.getUserEmail().subscribe(obj => {
      if (obj) {
        this.email = obj.text;
      } else {
         console.log("Error getting user email");
       }
      });

 }

 updateUserStatus() {

    this.user = JSON.parse(localStorage.getItem('user'));
    this.email = this.user.email;
  }

 signOut() {

    this.angularFireAuth.signOut().then(() => {
    localStorage.removeItem('user');
    this.shareddataserviceService.subject.next({ text:""});
    this.router.navigate(['/login']);
    })
  }
}


//firebase.auth().onAuthStateChanged(function(user) {
//if (user) {
  // User is signed in.
//} else {
  // No user is signed in.
//}
//});