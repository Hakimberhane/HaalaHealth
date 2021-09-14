import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-loginasadmin',
  templateUrl: './loginasadmin.component.html',
  styleUrls: ['./loginasadmin.component.css']
})
export class LoginasadminComponent implements OnInit {

  constructor(private angularFireAuth:AngularFireAuth,private router: Router) { 

    //  var user =    this.angularFireAuth.currentUser;
    //  if (user) {
     //     this.router.navigate(['/admpage']);
     // } 

       this.angularFireAuth.authState.subscribe(user => {
          if (user) {
            this.userData = user;
            localStorage.setItem('user', JSON.stringify(this.userData));
            JSON.parse(localStorage.getItem('user'));
            console.log("user now");
            console.log(this.userData);
           this.router.navigate(['/admpage'],{ queryParams: {uid: this.userData.uid}});
          } else {
            localStorage.setItem('user', null);
            JSON.parse(localStorage.getItem('user'));
          }
        })
  }

  ngOnInit(): void {
  }

}
