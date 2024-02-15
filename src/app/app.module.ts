import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { FirestoreModule } from '@angular/fire/firestore';
// import { environment } from '../firebase.config'; //

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"publitendencias-2fb87","appId":"1:460878830111:web:4bf3d18970efca6794932a","databaseURL":"https://publitendencias-2fb87-default-rtdb.firebaseio.com","storageBucket":"publitendencias-2fb87.appspot.com","apiKey":"AIzaSyCMWSbclZStTixcEzqcW2x4x23x-LdCC3Y","authDomain":"publitendencias-2fb87.firebaseapp.com","messagingSenderId":"460878830111","measurementId":"G-MZ3KP5VW4K"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
