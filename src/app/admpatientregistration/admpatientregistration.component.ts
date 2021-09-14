import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFirestore,AngularFirestoreDocument } from '@angular/fire/firestore';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-admpatientregistration',
  templateUrl: './admpatientregistration.component.html',
  styleUrls: ['./admpatientregistration.component.css']
})
export class AdmpatientregistrationComponent implements OnInit {

    submitted = false;
    initialptid: Number = 0;

    registerPatientForm = new FormGroup({
	    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
	    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      dob: new FormControl('', [Validators.required,Validators.pattern('[0-9]{2}/[0-9]{2}/[0-9]{4}')]),
	    gender: new FormControl('', [Validators.required]),
	    email: new FormControl('', [Validators.required, Validators.email]),
	    address: new FormControl('', [Validators.required]),
	    phone: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10), Validators.pattern("^[0-9]*$")]),
	    city: new FormControl('', [Validators.required, Validators.minLength(3)]),
	    region: new FormControl('', [Validators.required, Validators.minLength(3)]),
	    country: new FormControl('', [Validators.required, Validators.minLength(3)]),
      age: new FormControl('', [Validators.required]),
      activeCaseDocId: new FormControl(''),
      currentProviderId: new FormControl(''),

      caseStatus: new FormControl('inActive', [Validators.required]),

      dateCreated: new FormControl(''),
     
  });

   constructor(private angularFirestore:AngularFirestore,private angularFireAuth:AngularFireAuth,private router: Router, private activatedroute: ActivatedRoute) {
    
         this.submitted = false;
   }

   ngOnInit(): void {

      var user =    this.angularFireAuth.currentUser;
      if (user) {
       alert("I am logged in "+ user);
      } else {
       alert("not logged in");
      }


       this.angularFirestore.collection("DatabaseInitials").doc("initial").valueChanges().subscribe(res => { 
           this.initialptid = res.initialPatientId;
           this.initialptid = this.initialptid + 1;
         //  this.registerPatientForm.addControl('providerId', new FormControl(this.initialptid, Validators.required));
       });
  }

  SignUp() {

     let record = {}; 
     this.submitted = true;

     var dateCreated = new Date();
     var dateCreatedStr = dateCreated.toLocaleDateString();
     this.registerPatientForm.controls.dateCreated.setValue(dateCreatedStr);

     var timeDiff = Math.abs(Date.now() - new Date(this.registerPatientForm.controls.dob.value).getTime());
     let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
     this.registerPatientForm.controls.age.setValue(age);

     if (this.registerPatientForm.invalid) {
          console.log("Validation failed");
          this.resetValidation();
          return;

      } else {
        
           let patientIdTostring  =  JSON.stringify(this.initialptid);

        	 this.angularFirestore.collection("Patients").doc(patientIdTostring).set(this.registerPatientForm.value)
           .then(function() {
                console.log("Document successfully saved!");
           })
        	 .catch(error => {
        		   console.log('Something is wrong storing data in patients collection:', error.message);
        	 });
           this.angularFirestore.collection("DatabaseInitials").doc("initial").update({initialPatientId: this.initialptid})
           .then(function() {
                console.log("Document successfully saved!");
           })
           .catch(function(error) {   
                console.error("Error writing document: ", error);  
           });
        	 this.router.navigate(['/login']);
    }
  }

   get fv(){
      return this.registerPatientForm.controls;
   }

}
