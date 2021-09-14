import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import '@angular/compiler';

import { AppRoutingModule,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorhomepageComponent } from './doctorhomepage/doctorhomepage.component';

import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { DoctorserviceService } from './services/doctorservice.service';
import { AuthService } from './services/auth.service';
import { AuthResoloverService } from './auth-resolover.service';


import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { auth } from 'firebase/app';

// Datepicker module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NotesComponent } from './notes/notes.component';
import { EditdrprofileComponent } from './editdrprofile/editdrprofile.component';
import { DoctorprofileComponent } from './doctorprofile/doctorprofile.component';
import { PatientregistrationComponent } from'./patientregistration/patientregistration.component';
import { AdmpatientprofileComponent } from './admpatientprofile/admpatientprofile.component';
import { AdmpatientslistComponent } from './admpatientslist/admpatientslist.component';
import { AdmpatienteditComponent } from './admpatientedit/admpatientedit.component';
import { AdmassignaproviderComponent } from './admassignaprovider/admassignaprovider.component';
import { AdmpatienthistoryComponent } from './admpatienthistory/admpatienthistory.component';

import { JwPaginationModule } from 'jw-angular-pagination';
import { AdmpageComponent } from './admpage/admpage.component';
import { AdmproviderlistComponent } from './admproviderlist/admproviderlist.component';
import { AdmproviderslistComponent } from './admproviderslist/admproviderslist.component';
import { AdmpatientregistrationComponent } from './admpatientregistration/admpatientregistration.component';
import { ProvidereditpageComponent } from './providereditpage/providereditpage.component';
import { AdmpatienteditpageComponent } from './admpatienteditpage/admpatienteditpage.component';
import { AdmproviderprofileComponent } from './admproviderprofile/admproviderprofile.component';

import { ShareddataserviceService } from './services/shareddataservice.service';



import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { HomeComponent } from './home/home.component';
import { TesthomeComponent } from './testhome/testhome.component';
firebase.firestore.setLogLevel('debug');


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DoctorhomepageComponent,
    NotesComponent,
    EditdrprofileComponent,
    DoctorprofileComponent, 
    PatientregistrationComponent, AdmpatientprofileComponent, AdmpatientslistComponent, AdmpatienteditComponent, AdmassignaproviderComponent, AdmpatienthistoryComponent, AdmpageComponent, AdmproviderlistComponent, AdmproviderslistComponent, AdmpatientregistrationComponent, ProvidereditpageComponent, AdmpatienteditpageComponent, AdmproviderprofileComponent, HomeComponent, TesthomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    AngularFireDatabaseModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
    AngularFireStorageModule,// Only required for storage features
    JwPaginationModule
  ],
  providers: [DoctorserviceService,AuthService,AuthResoloverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
