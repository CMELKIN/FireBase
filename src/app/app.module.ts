import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
     provideFirebaseApp(() => initializeApp(environment.firebase)),
     provideFirestore(() => getFirestore()),
     provideFirebaseApp(() => initializeApp({"projectId":"proyectopractica1-b656c","appId":"1:1099427975359:web:f25798cb1103205a14360a","storageBucket":"proyectopractica1-b656c.appspot.com","apiKey":"AIzaSyDRmFj6N7DyxHVfxXEitbo0jSoRciq5e4w","authDomain":"proyectopractica1-b656c.firebaseapp.com","messagingSenderId":"1099427975359"})),
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
