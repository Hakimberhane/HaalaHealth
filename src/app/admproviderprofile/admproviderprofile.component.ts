import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFirestore,AngularFirestoreDocument,AngularFirestoreCollection  } from '@angular/fire/firestore';

import { ProviderserviceService } from '../services/providerservice.service';
import { Provider } from '../models/Provider.model';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admproviderprofile',
  templateUrl: './admproviderprofile.component.html',
  styleUrls: ['./admproviderprofile.component.css']
})
export class AdmproviderprofileComponent implements OnInit {
  
   providerId:number; 
   providerData:Patient;

 constructor(private route: ActivatedRoute,private router: Router,private providerserviceService:ProviderserviceService,private angularFirestore:AngularFirestore) {
   	  
        this.providerData = new Provider();
		this.route.queryParams.subscribe(params => {
				        // Defaults to 0 if no query param provided.
				        this.providerId = +params['providerId'] || 0;
                alert("chekc");
				        console.log(this.providerId);
						this.providerserviceService.getProviderProfile(this.providerId).subscribe(result => {
              console.log(result[0]);
						  this.providerData = result[0];
						});
				});
  
  
   }

  ngOnInit(): void {
  }

}
