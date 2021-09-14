import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { PatientserviceService } from '../services/patientservice.service';


@Component({
  selector: 'app-admpatientslist',
  templateUrl: './admpatientslist.component.html',
  styleUrls: ['./admpatientslist.component.css']
})
export class AdmpatientslistComponent implements OnInit {

  items = [];
  pageOfItems: Array<any>;
  patients = [];
  numbersofpatients:number;
  public text: string = 'Assign';

  constructor(private router: Router,private patientserviceService:e) {}
  ngOnInit() {

       // <td>{{item.dob.toDate() | date:'dd/MM/yyyy'}}</td>

      this.patientserviceService.getPatientslist().subscribe(jsonData =>{
        this.patients = jsonData;
        this.items = this.patients.map((x, i) => ({ id: (i + 1), id: x.id,lastName: x.lastName,firstName: x.firstName,dob:x.dob,age: x.age,gender: x.gender,address:x.address,city:x.city,region:x.region,country:x.country,email:x.email,phone:x.phone}));

            console.log(this.items);
      });
  }

  onChangePage(pageOfItems: Array<any>) {
        // update current page of items
       this.pageOfItems = pageOfItems;   
       this.numbersofpatients = this.pageOfItems.length;
  }

  assign(item,id){
    if(this.text === 'Assign') { 
        this.text = 'Assigned'
      } else {
        this.text = 'Assign'
      }
  }

  goToPatientDetail(item) {
     this.router.navigate(['/admpage/admpatientprofile'],{ queryParams: { id: item.id } });
  }

}
