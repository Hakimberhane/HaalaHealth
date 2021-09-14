import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PatientserviceService } from '../services/patientservice.service';
import { Patient } from '../models/Patient.model';

@Component({
  selector: 'app-admpatienteditpage',
  templateUrl: './admpatienteditpage.component.html',
  styleUrls: ['./admpatienteditpage.component.css']
})
export class AdmpatienteditpageComponent implements OnInit {

   patientId:number; 
   patientData:Patient;
   lastName:any;
   constructor(private route: ActivatedRoute,private router: Router,private patientserviceService:PatientserviceService) {
   	
		this.patientData = new Patient();
		this.route.queryParams.subscribe(params => {
		        this.patientId = +params['id'] || 0;
			    	this.patientserviceService.getPatientsProfile(this.patientId).subscribe(result => {

              console.log("result check");
              console.log(result);
    				  this.patientData = result;

              console.log(this.patientData.lastName);
  				    this.firstName = this.patientData.firstName;
              this.lastName = this.patientData.lastName;

              console.log("last name");
              console.log(this.lastName);
              this.dob = this.patientData.dob;
              this.gender = this.patientData.gender;
              this.email = this.patientData.email;
              this.phone = this.patientData.phone;
              this.address = this.patientData.address;
              this.city = this.patientData.city;
              this.region = this.patientData.region;
              this.country = this.patientData.country;

  			  	  console.log(this.patientData);
				});
		});

   }


  ngOnInit(): void {

  }

}
