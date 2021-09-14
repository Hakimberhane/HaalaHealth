import { Injectable } from '@angular/core';
import { BehaviorSubject  } from 'rxjs/BehaviorSubject';

import { Observable,Subject,Subscription } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ShareddataserviceService {

public subject = new Subject<any>();

private dataSource = new BehaviorSubject<string>('default message');
currentMessage = this.dataSource.asObservable();


  patientId : number;
  activeCaseDocId:string;
  caseStatus:string;
  providerId : number;

  constructor() {

    alert("this is service");
    this.patientId = 0;

    alert("hhh");
        alert(this.patientId);

  }

  changeStatus(message:string){ 	
  	this.dataSource.next(message);
  }

  getUserEmail(): Observable<any> {
        return this.subject.asObservable();
    }
}
