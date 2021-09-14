import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {PatientlistComponent} from '../patientlist/patientlist.component';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable } from "rxjs";


@Component({
  selector: 'app-doctorhomepage',
  templateUrl: './doctorhomepage.component.html',
  styleUrls: ['./doctorhomepage.component.css']
})
export class DoctorhomepageComponent implements OnInit {

 constructor(private angularFireAuth:AngularFireAuth,private router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToPatientList(){

     this.router.navigate(['/doctorhomepage/patientlist']);

  }

  public goPaymentPage() { 

     this.router.navigate(['/doctorhomepage/payment']);
  } 
  
  public goProfilePage() { 
  
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
  public goSettingsPage() { 

     this.router.navigate(['/doctorhomepage/settings']);

  }


}
