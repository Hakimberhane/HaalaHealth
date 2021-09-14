import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ShareddataserviceService } from '../services/shareddataservice.service';

import { ProviderserviceService } from '../services/providerservice.service';


@Component({
  selector: 'app-admproviderslist',
  templateUrl: './admproviderslist.component.html',
  styleUrls: ['./admproviderslist.component.css']
})
export class AdmproviderslistComponent implements OnInit {

  items = [];
    pageOfItems: Array<any>;
    providers:[]
    numbersofproviders:number;  

  constructor(private router: Router,private providerserviceService:ProviderserviceService) {}
  ngOnInit() {

      this.providerserviceService.getProviderlist().subscribe(jsonData =>{
        this.providers = jsonData;
        console.log("providers");
        console.log(this.providers);
        this.items = this.providers.map((x, i) => ({ id: (i + 1), providerId: x.providerId,lastName: x.lastName,firstName: x.firstName,title: x.title,phone: x.phone,email:x.email,speciality:x.speciality,address:x.address,city:x.city,region:x.region,country:x.country,yearsofexp:x.yearsofexp,available:x.available,verified:x.verified}));

      });
  }

  onChangePage(pageOfItems: Array<any>) {
        // update current page of items
       this.pageOfItems = pageOfItems;  
       this.numbersofproviders = this.pageOfItems.length;
         
  }

   verify(item){

     if(!item.verified) { 
          this.providerserviceService.verify(item.providerId);

        } else {
          this.providerserviceService.unVerify(item.providerId);
        }
    }

  goToProviderDetail(item) {
     this.router.navigate(['/admpage/admproviderprofile'],{ queryParams: { providerId: item.providerId } });
  }

}
