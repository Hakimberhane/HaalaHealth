import { Component, OnInit,Input } from '@angular/core';
import { ProviderserviceService } from '../services/providerservice.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { AngularFirestore,AngularFirestoreDocument,AngularFirestoreCollection  } from '@angular/fire/firestore';
import { ShareddataserviceService } from '../services/shareddataservice.service';

import { PatientserviceService } from '../services/patientservice.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-admassignaprovider',
  templateUrl: './admassignaprovider.component.html',
  styleUrls: ['./admassignaprovider.component.css']
})
export class AdmassignaproviderComponent implements OnInit {

    items = [];
    pageOfItems: Array<any>;
    providers:[]
    public text: string = 'Assign';
    sharedSevPrvId:number
    patientId: number;
    initialCaseId: Number;
    caseId:number;
    assignedProviderId:number;
    currentAssignedPrvId:number;

  constructor(private location:Location,private route: ActivatedRoute,private providerservice:ProviderserviceService,
       public shareddataservice:ShareddataserviceService,private patientserviceService:PatientserviceService,private angularFirestore:AngularFirestore ) {
            
    //  this.route.queryParams.subscribe( params =>
        //  this.patientId = params.get('id')
    //  )

      this.patientId = Number(this.shareddataservice.patientId);
      this.patientserviceService.getPatientsProfile(this.patientId).subscribe(result => {
             this.patientData = result;
             console.log(this.patientData);
             this.currentAssignedPrvId = this.patientData.currentProviderId;
      });

      this.providerservice.getAvailableProv().subscribe(jsonData =>{
          this.providers = jsonData;
          this.items = this.providers.map((x, i) => ({ id: (i + 1), providerId: x.providerId,lastName: x.lastName,firstName: x.firstName,phone: x.phone,email: x.email}));
      });
  }

  ngOnInit() {

      this.patientId = Number(this.shareddataservice.patientId);
      this.providerservice.getProviderPatientRelStatus(this.patientId).subscribe(item => {
          if(item) {          
             this.caseId =  item[0].caseId;
             this.assignedProviderId = item[0].providerId; 
          }
      }) 
      //this.items = Array(10).fill(2).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1 + x}`}));
  }

  onChangePage(pageOfItems: Array<any>) {
        // update current page of items
       this.pageOfItems = pageOfItems;           
  }

  assign(element,item){
  
      if(element.innerText === "Assign") { 

          //if(this.shareddataservice.activeCaseDocId) {
          if(this.patientData.caseStatus == "Active") {
             alert("return");
             return;
          }
          this.providerservice.assignaprovider(item.providerId, this.shareddataservice.patientId);
          this.assignedProviderId = item.providerId;
          element.textContent = 'Active';
      } else {
        
          this.providerservice.unassignaprovider(this.shareddataservice.activeCaseDocId,this.shareddataservice.patientId);
          element.textContent = 'Assign'
      }
  }

}
