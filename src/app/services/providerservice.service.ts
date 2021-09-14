import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreDocument,AngularFirestoreCollection  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShareddataserviceService } from '../services/shareddataservice.service';

@Injectable({
  providedIn: 'root'
})
export class ProviderserviceService {

  providers = [];
  providersArray:any;
	initialCaseId: Number;

  constructor(private angularFirestore:AngularFirestore,private shareddataserviceService:ShareddataserviceService) {

     this.getAvailableProv().subscribe(jsonData =>{
        this.providers = jsonData;
     });

     this.angularFirestore.collection("DatabaseInitials").doc("initial").valueChanges().subscribe(res => { 
           this.initialCaseId = res.initialCaseId;
     });

  }

	getProvidersdata() {
	   	 return this.angularFirestore.collection('Providers',ref => ref.where('available', '==', 'true'));
  }

	public getProviders() {
	     return this.providers;
	}

	getAvailableProv(){

		  return this.angularFirestore.collection('Providers',ref => ref.where('available', '==', true)
      .where('verified', '==', true))
      .snapshotChanges()
		  .pipe(map(actions => actions.map(a => {
		  	const object = a.payload.doc.data();
			    object.id = a.payload.doc.id;
			    return object;
		  })));
	}

	getProviders(){

		  return this.angularFirestore.collection('Providers').snapshotChanges()
		  .pipe(map(actions => actions.map(a => {
		  	const object = a.payload.doc.data();
			    object.id = a.payload.doc.id;
			    return object;
		  })));
	}

	getProviderlist() {
      return this.angularFirestore.collection('Providers').snapshotChanges()
          .pipe(map(actions => actions.map(a => {
            const object = a.payload.doc.data();
              object.id = a.payload.doc.id;
              return object;
          })));
   }

  getProviderProfile(providerId) {

  //   return  this.angularFirestore.collection<Provider>('Providers').doc(providerId.toString()).valueChanges();
     return this.angularFirestore.collection('Providers',ref => ref.where('providerId', '==', providerId.toString())).valueChanges();

  }

  obtainProviderProfile(providerId) {

     return  this.angularFirestore.collection<Provider>('Providers').doc(providerId).valueChanges();

  }

  assignaprovider(prvId,patientId) {

     var assignObj:any = {
         caseId:this.initialCaseId + 1,
         providerId:prvId,
         patientId:patientId,
         status:"Active"
     };

    var docRef = this.angularFirestore.collection("ProviderPatientRel").add(assignObj);
    docRef.then((data) => {
            console.log("Successfuly a case is created");
            console.log(data);
            this.updatePatientProfile(patientId,data.id,"Active",prvId);
            var action:string = "update";
        })
        .catch(function(e) {
            console.log(e);
        })
   
        this.updateInitials(this.initialCaseId + 1);
   }

   updatePatientProfile(patientId,activeCaseDocId,caseStatus,prvId) {
     
       this.angularFirestore.collection("Patients").doc(patientId.toString()).update({activeCaseDocId:activeCaseDocId,
       caseStatus:caseStatus,currentProviderId:prvId})
       .then(function(res) {
            console.log("Successfuly updated patient profile");

       })
       .catch(function(e) {
            console.log(e);
       })
   }

   updateInitials(csId:Number){ 
      this.angularFirestore.collection("DatabaseInitials").doc("initial").update({initialCaseId:csId})
      .then(function(res) {
            console.log("Successfuly updated DatabaseInitials");
       })
       .catch(function(e) {
            console.log(e);
       })
   }

   unassignaprovider(activeCaseDocId,patientId) {

      this.angularFirestore.collection("Patients").doc(patientId.toString()).update({
         activeCaseDocId:"",
         caseStatus:"inActive",
         currentProviderId:"",
       })
      .then(function(res) {
            console.log("Successfuly updated patientProfile");
       })
       .catch(function(e) {
            console.log(e);
       })

        this.angularFirestore.collection("ProviderPatientRel").doc(activeCaseDocId).delete()
        .then(function() {
            console.log("Successfuly deleted a case");
       })
       .catch(function(e) {
            console.log(e);
       })


     //  const deletCase = this.angularFirestore.collection('ProviderPatientRel', ref => ref.where('providerId', '==', providerId)
        //                                                   .where('patientId', '==', patientId)
         //                                                 .where('status', '==', "Active"));
      // deletCase.get().subscribe(delitems => delitems.forEach( doc=> doc.ref.delete())).then(function(res) {
       //     console.log("record erased");
      // })
      // .catch(function(e) {
     //  })

   }

  getProviderPatientRelStatus(patientId:number) {
	   	 return this.angularFirestore.collection('ProviderPatientRel',ref => ref.where('patientId', '==', patientId)
       .where('status', '==', "Active"))
       .valueChanges();
   }

 //   getProviderPatientRelStatus() {
  //     return this.angularFirestore.collection('ProviderPatientRel',ref => ref.where('available', '==', 'true'));
  // }

  verify(providerId:number) {

    //  this.angularFirestore.collection('Providers',ref => ref.where('providerId', '==', 4))
     //    .get().subscribe(delitems => delitems.forEach( doc=> {
       //  }))
      this.angularFirestore.collection('Providers',ref => ref.where('providerId', '==', providerId))
           .get().subscribe(delitems => {
               console.log(delitems.docs[0].id);
               this.updateVerification(delitems.docs[0].id,true);     
      });
  }

  unVerify(providerId:number) {

     this.angularFirestore.collection('Providers',ref => ref.where('providerId', '==', providerId))
           .get().subscribe(delitems => {
               console.log(delitems.docs[0].id);
               this.updateVerification(delitems.docs[0].id,false);       
        });   
  }

  updateVerification(id:number,ver:boolean) {
      this.angularFirestore.collection('Providers').doc(id).update({verified:ver})
      .then(function(res) {
            console.log("verification is updated successfuly");
       })
        .catch(function(e) {
            console.log("failed updating verification");
            console.log(e);
      })
   }
}

