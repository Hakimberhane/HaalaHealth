import { Injectable }             from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import 'rxjs/add/operator/first';

import { DoctorserviceService } from './services/doctorservice.service';


@Injectable()
export class DoctorResolve implements Resolve<FirebaseListObservable<any>> {
  constructor(private af: AngularFire) {}

 // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<//FirebaseListObservable<any>> {
//    let list = this.af.database.list('');
//    return new Promise((resolve, reject) => {
      // must import 'rxjs/add/operator/first'; before using it here
  //    list.first().subscribe(() => {
    //    resolve(list)
      //}, reject);
    //});
  //}  

   resolve(private doctorservice DoctorserviceService,private route: ActivatedRouteSnapshot,private state: RouterStateSnapshot): Promise<FirebaseListObservable<any>> {
     doctorservice.create_NewProvider(route.params.data);

   }

}








//import { Injectable} from '@angular/core';
//import { Resolve,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
//import { Observable} from 'rxjs/Rx';
//import { DoctorserviceService } from './services/doctorservice.service';
//import { Subscription} from 'rxjs/Subscription';



//@Injectable()
//export class DoctorResolve implements Resolve<any> {

  //constructor(private dateservice:DoctorserviceService) { }

  //resolve(route:ActivateRouteSnapshot,
    //      state:RouterStateSnapshot,):Observable<any> {
          	
      //    	return this.dataservice.read_Providers();
        //  }
//}
