import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFirestore,AngularFirestoreDocument } from '@angular/fire/firestore';
import { FormGroup, FormBuilder,FormControl,Validators} from '@angular/forms';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-registerprovider',
  templateUrl: './registerprovider.component.html',
  styleUrls: ['./registerprovider.component.css']
})
export class RegisterproviderComponent implements OnInit {


  specialities = [
    { id: 1, name: "EMERGENCY MEDICINE." },
    { id: 2, name: "FAMILY MEDICINE." },
    { id: 3, name: "INTERNAL MEDICINE." },
    { id: 4, name: "NEUROLOGY." },
    { id: 5, name: "OBSTETRICS AND GYNECOLOGY." },
    { id: 6, name: "PREVENTIVE MEDICINE." },
    { id: 7, name: "PEDIATRICS." }
  ];

  titles = [
    { id: 1, name: "Dr." },
    { id: 2, name: "RN." }
  ];

   submitted = false;
   initialprid: Number = 0;

    registerForm:FormGroup = new FormGroup({

    title: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),

    address: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10), Validators.pattern("^[0-9]*$")]),
    city: new FormControl('', [Validators.required, Validators.minLength(3)]),
    region: new FormControl('', [Validators.required, Validators.minLength(3)]),
    country: new FormControl('', [Validators.required, Validators.minLength(3)]),
    speciality: new FormControl('', [Validators.required]),
    background: new FormControl('', [Validators.required, Validators.minLength(20)]),
    yearsofexp: new FormControl('', [Validators.required]),

    firstachievment: new FormControl('', [Validators.required]),
    firstintitution: new FormControl('', [Validators.required]),
    firstInsCity: new FormControl('', [Validators.required]),
    firstInsRegion: new FormControl('', [Validators.required]),
    firstInsCountry: new FormControl('', [Validators.required]),

    secondachievment: new FormControl('', [Validators.required]),
    secondinstitution: new FormControl('', [Validators.required]),
    secondInsCity: new FormControl('', [Validators.required]),
    secondInsRegion: new FormControl('', [Validators.required]),
    secondInsCountry: new FormControl('', [Validators.required]),

    thirdachievment: new FormControl('', [Validators.required]),
    thirdinstitution: new FormControl('', [Validators.required]),
    thirdInsCity: new FormControl('', [Validators.required]),
    thirdInsRegion: new FormControl('', [Validators.required]),
    thirdInsCountry: new FormControl('', [Validators.required]),

    providerId: new FormControl('', [Validators.required]),

    available: new FormControl(false),
    verified: new FormControl(false),

    password: new FormControl('', [Validators.required,Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  constructor(private angularFirestore:AngularFirestore,private angularFireAuth:AngularFireAuth,private router: Router, private activatedroute: ActivatedRoute) { 


   alert("hello");
     //this.submitted = false;

  }


  ngOnInit(): void {

    var user =    this.angularFireAuth.currentUser;
    if (user) {
     alert("I am logged in "+ user);
    } else {
     alert("not logged in");
    }

    this.angularFirestore.collection("DatabaseInitials").doc("initial").valueChanges().subscribe(res => { 
         this.initialprid = res.initialProviderId;
         this.initialprid = this.initialprid + 1;
        this.registerForm.addControl('providerId', new FormControl(this.initialprid, Validators.required));
    });
  }

   ngOnChanges() {

    //alert("fired"); // fired each time change detection runs
  }

  validateSecondAchievment() {
      this.registerForm.controls.secondachievment.setErrors(null);
      this.registerForm.controls.secondinstitution.setErrors(null);
      this.registerForm.controls.secondInsCity.setErrors(null);
      this.registerForm.controls.secondInsRegion.setErrors(null);
      this.registerForm.controls.secondInsCountry.setErrors(null);
  }

  validateThirdAchievment() {
      this.registerForm.controls.thirdachievment.setErrors(null);
      this.registerForm.controls.thirdinstitution.setErrors(null);
      this.registerForm.controls.thirdInsCity.setErrors(null);
      this.registerForm.controls.thirdInsRegion.setErrors(null);
      this.registerForm.controls.thirdInsCountry.setErrors(null);
  }

  resetValidation(){

      this.registerForm.controls.secondachievment.setErrors({'incorrect': true});
      this.registerForm.controls.secondinstitution.setErrors({'incorrect': true});
      this.registerForm.controls.secondInsCity.setErrors({'incorrect': true});
      this.registerForm.controls.secondInsRegion.setErrors({'incorrect': true});
      this.registerForm.controls.secondInsCountry.setErrors({'incorrect': true});

      this.registerForm.controls.thirdachievment.setErrors({'incorrect': true});
      this.registerForm.controls.thirdinstitution.setErrors({'incorrect': true});
      this.registerForm.controls.thirdInsCity.setErrors({'incorrect': true});
      this.registerForm.controls.thirdInsRegion.setErrors({'incorrect': true});
      this.registerForm.controls.thirdInsCountry.setErrors({'incorrect': true});
  }

   SignUp() {

     this.submitted = true;

     let providerTostring  =  JSON.stringify(this.initialprid);
     this.registerForm.controls.providerId.setValue(providerTostring);

     if(this.registerForm.controls.secondachievment.invalid) {  
       this.validateSecondAchievment();
     }      
     if(this.registerForm.controls.thirdachievment.invalid) {
       this.validateThirdAchievment();
     }
      
     if (this.registerForm.invalid) {
          console.log("Validation failed");
          this.resetValidation();
          return;

      } else {
              
           let userpassword = this.registerForm.get('password').value;
           let useremail = this.registerForm.get('email').value;
           this.registerForm.removeControl('password'); 
           this.registerForm.removeControl('confirmedpassword'); 
              

           console.log("initialprovidrID");
           console.log(providerTostring);
           console.log(this.registerForm.value);
           this.angularFireAuth
              .createUserWithEmailAndPassword(useremail,userpassword)
              .then((result)=> {
                  console.log("result user uid");
                  console.log(result.user.uid);
                  this.angularFirestore.collection("Providers").doc(result.user.uid).set(this.registerForm.value).
                  catch(error => {
                       console.log('Something is wrong storing data in providers table:', error.message);
                  });
                  console.log('You are Successfully signed up!');

              })
              .catch(error => {
                  console.log('Something is wrong:', error.message);
              });

            this.angularFirestore.collection("DatabaseInitials").doc("initial").update({initialProviderId: this.initialprid}).catch(function(error) { console.error("Error writing document: ", error); });

            this.router.navigate(['/login']);
      }

    }

   getPolicies() {
        return this.angularFirestore.collection('DatabaseInitials').snapshotChanges();
    }

   get fv(){
      return this.registerForm.controls;
   }
   public getfv(){
      return this.registerForm.controls;
   }

   public saveData(initialprid:number) {
     
       this.angularFirestore.collection('DatabaseInitials').doc('initial').set({initialProviderId: initialprid}).then(() => { 
           console.log("Document successfully written!"); 
           this.router.navigate(['/login']);
       }).catch(function(error) { console.error("Error writing document: ", error); });
   }

   public processdata() {


    this.angularFirestore.collection("DatabaseInitials").doc("initial").ref.get().then((doc) => {
        
         this.initialprid = doc.data().initialProviderId;
         this.initialprid = this.initialprid + 1;
         console.log("the data is :" + this.initialprid);

      }).catch(error => {
         console.log('Something is wrong with saving', error.message);
      });  
     
   }


ComparePassword(controlName: string, matchingControlName: string) {

    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
           return;
        }

        if (control.value !== matchingControl.value) {
           matchingControl.setErrors({ mustMatch: true });
        } else {
           matchingControl.setErrors(null);
        }
    };
}

}
