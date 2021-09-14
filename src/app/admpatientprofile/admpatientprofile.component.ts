import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFirestore,AngularFirestoreDocument,AngularFirestoreCollection  } from '@angular/fire/firestore';
import { PatientserviceService } from '../services/patientservice.service';
import { ShareddataserviceService } from '../services/shareddataservice.service';
import { Patient } from '../models/Patient.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admpatientprofile',
  templateUrl: './admpatientprofile.component.html',
  styleUrls: ['./admpatientprofile.component.css']
})
export class AdmpatientprofileComponent implements OnInit {

   patientId:number; 
   patientData:Patient;
   constructor(private route: ActivatedRoute,private router: Router,private patientserviceService:PatientserviceService,private angularFirestore:AngularFirestore,private shareddataservice:ShareddataserviceService) {
   	
      this.patientData = new Patient();
  		this.route.queryParams.subscribe(params => {
  				    // Defaults to 0 if no query param provided.
  				    this.patientId = +params['id'] || 0;
              this.shareddataservice.patientId = this.patientId;
          
  						this.patientserviceService.getPatientsProfile(this.patientId).subscribe(result => {
  						  this.patientData = result;
                this.shareddataservice.activeCaseDocId = this.patientData.activeCaseDocId;
                 this.shareddataservice.caseStatus = this.patientData.caseStatus;
  						});
  				});
   }

   ngOnInit() {

   }

   goToPatientEditPage(){
            this.router.navigate(['/admpage/admpatienteditpage'],{ queryParams: { id: this.patientId } });
   }
   

}
