import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreDocument,AngularFirestoreCollection  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {
  
  providers=[];
  patients = [];
  patientsArray:any;
  patientData:any;

  constructor(private angularFirestore:AngularFirestore) {

     // this.getPatientsdatac().subscribe(jsonData =>{
       //    jsonData.forEach(docb => {
         //       this.angularFirestore.collection("Patients").doc(docb.patientId).ref.get()
           //       .then((pdoc) => {
             //                docb.patientId = docb.patientId;
               //              docb.firstName = pdoc.data().firstName;
                   //          docb.lastName = pdoc.data().lastName;
                 //            docb.gender = pdoc.data().gender;  
                     //        docb.age = pdoc.data().age;
                       //      docb.phone = pdoc.data().phone;
                         //    docb.email = pdoc.data().email;
                           //  this.patients.push(docb);

              //   });
        
           //});
  // });
   
  }

  getProviderPatientsdata(providerId) {

     console.log("providerId");
     console.log(providerId);

     return this.angularFirestore.collection('ProviderPatientRel',ref => ref.where('providerId', '==', providerId)).valueChanges();
  }

  getptsList(ptId) {
  
    return this.angularFirestore.collection('Patients').doc(ptId.toString()).ref.get();
  }
  
  getPatientslist() {
      return this.angularFirestore.collection('Patients').snapshotChanges()
          .pipe(map(actions => actions.map(a => {
            const object = a.payload.doc.data();
              object.id = a.payload.doc.id;
              return object;
          })));
   }

  public getPatients() {

    return this.patients;
  }

  getPatientsProfile(patientId) {
     return  this.angularFirestore.collection<Patient>('Patients').doc(patientId.toString()).valueChanges();
  }

  getDocsByParam(pId:number) {
    var docRef = this.angularFirestore.collection("ProviderPatientRel").ref;
    return docRef.where(patientId, '==', pId).get();
  }
}


