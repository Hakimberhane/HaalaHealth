import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProviderserviceService } from '../services/providerservice.service';

@Component({
  selector: 'app-drprofile',
  templateUrl: './drprofile.component.html',
  styleUrls: ['./drprofile.component.css']
})
export class DrprofileComponent implements OnInit {

  providerId:number;
  provider:Any;

  constructor(private router: Router, private activatedroute: ActivatedRoute,private providerserviceService:ProviderserviceService ) {

    this.activatedroute.queryParams.subscribe(params => {
         this.providerId = params['uid'];
    })

    providerserviceService.obtainProviderProfile(this.providerId).subscribe(result => {
         this.provider = result;
         console.log(this.provider);
    })
  }

  ngOnInit(): void {
  }

  goToProviderEditPage(){
     this.router.navigate(['/doctorhomepage/providereditpage']);
  }

}
