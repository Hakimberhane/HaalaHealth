import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-patientdetail',
  templateUrl: './patientdetail.component.html',
  styleUrls: ['./patientdetail.component.css']
})
export class PatientdetailComponent implements OnInit {

 patient:any;
 constructor(private router: Router, private activatedroute: ActivatedRoute) { }
 
  ngOnInit() {
      this.activatedroute.queryParams.subscribe(params => {
        if (params && params.special) {
          this.patient = JSON.parse(params.special);
        } 
      });
  }

  public goPaymentPage() { 

     this.router.navigate(['/payment']);


  } 
  public goProfilePage() { 

     this.router.navigate(['/drprofile']);

  }
  public goSettingsPage() { 

     this.router.navigate(['/settings']);

  }


}
