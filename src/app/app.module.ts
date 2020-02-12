import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule, LOCALE_ID } from '@angular/core';

import { CommonModule } from '@angular/common';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.modules';

import { AppComponent } from './app.component';
import { BillNavbarComponent } from './bill-navbar/bill-navbar.component';
import { LoginComponent } from "./bill-navbar/autenticacao/login/login.component";
import { HomeComponent } from './pages/home/home.component';
import { environment } from 'src/environments/environment';

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AutenticacaoComponent } from './bill-navbar/autenticacao/autenticacao.component';

registerLocaleData(ptBr)

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
 
 
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("899249330774-j4glghlf4b5amtc87h1o45gk9qltd24s.apps.googleusercontent.com")
  }
//   {
//     id: FacebookLoginProvider.PROVIDER_ID,
//     provider: new FacebookLoginProvider("Facebook-App-Id")
//   }
]);

export function provideConfig() {
    return config;
  }

@NgModule({
    declarations: [
        AppComponent,
        BillNavbarComponent,
        HomeComponent,
        AutenticacaoComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        SocialLoginModule
    ],
    exports: [
        CommonModule,
        RouterModule
    ],
    providers: [
        { 
            provide: LOCALE_ID, 
            useValue: 'pt' 
        },
        {
            provide: AuthServiceConfig,
            useFactory: provideConfig
          }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }