import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './auth/login/login.component';
import { LoginasadminComponent } from'./auth/loginasadmin/loginasadmin.component';

import { ForgotpasswordComponent } from './auth/forgotpassword/forgotpassword.component';

import { RegisterproviderComponent } from './auth/registerprovider/registerprovider.component';


import { PatientlistComponent } from './patientlist/patientlist.component';
import { PatientdetailComponent } from './patientdetail/patientdetail.component';
import { HistoryComponent } from './history/history.component';
import { AlergiesComponent } from './alergies/alergies.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { PrescriptionsComponent } from './prescriptions/prescriptions.component';
import { NotesComponent } from './notes/notes.component';

import { DrprofileComponent } from './drprofile/drprofile.component';
import { SettingsComponent } from './settings/settings.component';
import { PaymentComponent } from './payment/payment.component';
import { AuthService } from './services/auth.service';

import { AuthResoloverService } from './auth-resolover.service';


import { DoctorhomepageComponent } from './doctorhomepage/doctorhomepage.component';
import { DoctorserviceService } from './services/doctorservice.service';
import { PatientregistrationComponent } from'./patientregistration/patientregistration.component';
import { AdmpatientprofileComponent } from'./admpatientprofile/admpatientprofile.component';
import { AdmassignaproviderComponent } from'./admassignaprovider/admassignaprovider.component';

import { AdmpageComponent } from'./admpage/admpage.component';
import { AdmpatientslistComponent } from'./admpatientslist/admpatientslist.component';
import { AdmproviderslistComponent } from'./admproviderslist/admproviderslist.component';
import { AdmpatientregistrationComponent } from'./admpatientregistration/admpatientregistration.component';
import { AdmpatienteditpageComponent } from'./admpatienteditpage/admpatienteditpage.component';
import { AdmproviderprofileComponent } from'./admproviderprofile/admproviderprofile.component';

import { ProvidereditpageComponent } from'./providereditpage/providereditpage.component';
import { HomeComponent } from'./home/home.component';


import { TesthomeComponent } from'./testhome/testhome.component';


const routes: Routes =  [{path: 'login' , component:LoginComponent},
                         {path: 'registerprovider' , component:RegisterproviderComponent}, 
                         {path: 'patientregistration' , component:PatientregistrationComponent},  
                         {path: 'forgotpassword' , component:ForgotpasswordComponent},  
                         {path: 'home' , component:HomeComponent},  
                         {path: 'testhome' , component:TesthomeComponent},  

                         {path: 'loginasadmin' , component:LoginasadminComponent},  

                         { path: '',  redirectTo: '/home', pathMatch: 'full'},		
                         
                         { path: 'admpage',        
							        component: AdmpageComponent,				   
							        children: [
							           {path: 'admpatientslist' , component:AdmpatientslistComponent},
                                       {path: 'admproviderslist' , component:AdmproviderslistComponent},
                                       {path: 'admpatientregistration' , component:AdmpatientregistrationComponent},
                                       {path: 'admpatienteditpage' , component:AdmpatienteditpageComponent},
									   {path: 'admproviderprofile' , component:AdmproviderprofileComponent},

									   {path: 'admpatientprofile' , component:AdmpatientprofileComponent,
				                              children: [
											           {path: 'admassignaprovider' , component:AdmassignaproviderComponent},
											           {path: '',redirectTo: 'admassignaprovider', pathMatch: 'full',}
				                               ]

				                         },  
                                       {
							               path: '',        
							               redirectTo: 'admpatientslist', pathMatch: 'full',
							           },	        
							         ]

                         },
                            				
                         { path: 'doctorhomepage',        
							        component: DoctorhomepageComponent,				   
							        children: [
							           {path: 'payment' , component:PaymentComponent},
                                       {path: 'drprofile' , component:DrprofileComponent},
                                       {path: 'settings' , component:SettingsComponent},
							           {path: 'patientlist', component: PatientlistComponent},	
							           {path: 'providereditpage', component: ProvidereditpageComponent},	

							           {
							               path: '',        
							               redirectTo: 'drprofile', pathMatch: 'full',
							           },	
							           {
							               path: 'patientdetail',        
							               component: PatientdetailComponent,    
							               children: [
							                   {
							                       path: '',        
							                       redirectTo: 'history', pathMatch: 'full',
							                   },	
									           {
									               path: 'history',        
									               component: HistoryComponent,
									           },
									           {
									               path: 'alergies',        
									               component: AlergiesComponent,
									           },
									           {
									               path: 'appointments',        
									               component: AppointmentsComponent,
									           },
									           {
									               path: 'prescriptions',        
									               component: PrescriptionsComponent,
									           }, 
									           {
									               path: 'notes',        
									               component: NotesComponent,
									           }, 
									       ] 
							            },	    						           
							       ]           

							},         

                     ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [DoctorserviceService,AuthService]

})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,ForgotpasswordComponent, RegisterproviderComponent,PatientlistComponent,
                               ProvidereditpageComponent,PatientdetailComponent,PatientregistrationComponent,AdmpatientprofileComponent,
                               AdmproviderprofileComponent,HistoryComponent,DrprofileComponent,SettingsComponent,PaymentComponent,
                               AppointmentsComponent,AlergiesComponent,PrescriptionsComponent,NotesComponent,DoctorhomepageComponent]


