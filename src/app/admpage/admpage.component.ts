import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-admpage',
  templateUrl: './admpage.component.html',
  styleUrls: ['./admpage.component.css']
})
export class AdmpageComponent implements OnInit {

 constructor(private router: Router, private activatedroute: ActivatedRoute) { }
 

  ngOnInit(): void {
  }

 goToPatientList(){

     this.router.navigate(['/admpage/admpatientslist']);

  }

 public goToProvidersList() { 

     this.router.navigate(['/admpage/admproviderslist']);


  } 
  public goToPatienRegistration() { 

     this.router.navigate(['/admpage/admpatientregistration']);

  }
  public goSettingsPage() { 

     this.router.navigate(['/doctorhomepage/settings']);

  }




}
