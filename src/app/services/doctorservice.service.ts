
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DoctorserviceService {

  constructor(private firestore: AngularFirestore) { }


  create_NewProvider(record) {
    return this.firestore.collection('Providers').add(record);
  }

  getProviders() {
    return this.firestore.collection('Providers').snapshotChanges();
  }

  update_Provider(recordID,record){
    this.firestore.doc('Providers/' + recordID).update(record);
  }

  delete_Provider(record_id) {
    this.firestore.doc('Providers/' + record_id).delete();
  }
}