import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PatientdetailComponent } from './patientdetail/patientdetail.component';

import { PatientserviceService } from '../services/patientservice.service';
import { ProviderserviceService } from '../services/providerservice.service';

import { AngularFireAuth } from '@angular/fire/auth';

import { PipesModule,FilterPipe } from '../../pipes/pipes.module';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.css']
})
export class PatientlistComponent implements OnInit {

  patients:any;
  userData:any;
  localStorage:Storage;
  patientslist = [];

   constructor(private angularFireAuth:AngularFireAuth,private router: Router, private activatedroute: ActivatedRoute,private patientservice:PatientserviceService,private patientdetail:PatientserviceService,private providerserviceService: ProviderserviceService) {


  //  this.angularFireAuth.authState.subscribe((user) => {
     // if (user) {
      //  this.userData = user;
       // localStorage.setItem('user', JSON.stringify(this.userData));
       // JSON.parse(localStorage.getItem('user'));
        //     console.log("I am logged in "+ localStorage.getItem('user'));

     // } else {
      //  localStorage.setItem('user', null);
       // JSON.parse(localStorage.getItem('user'));
         //    console.log("I am not logged in ");

      //}
    //})

    const  userData  =  JSON.parse(localStorage.getItem('user'));
    console.log("current user id");
    console.log(userData.uid);
    this.providerserviceService.obtainProviderProfile(userData.uid).subscribe(res => { 
           this.getPatientList(res.providerId);
     });
   
   
    }

  ngOnInit(): void {

  }

  getPatientList(providerId){
    
     this.patientservice.getProviderPatientsdata(providerId).subscribe(jsonData =>{
     console.log(jsonData);
        this.getptsList(jsonData);
    });
  }

  getptsList(jsonData) {

      this.patientslist = [];
      jsonData.forEach(docb => {
         var ptId = docb.patientId;
         this.patientservice.getptsList(ptId.toString())
         .then(pdoc => {
                  var patient = pdoc.data();
                  patient.patientId = docb.patientId;
                  patient.status = docb.status;
                  this.patientslist.push(patient);
                  console.log("this.patientslist");
                  console.log(this.patientslist)  ;
           });
        });

  }


  onActionSelected() {
    
    alert("clicked");

  }
}
