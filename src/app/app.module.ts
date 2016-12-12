import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';

import { MailService } from './mail.service';
import { HijoComponent } from './hijo/hijo.component';
import { TitleComponent } from './title/title.component';

import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyC904D-1e9ZehLU0czCgkIyrAxJnHnKkL8",
    authDomain: "teninja-74013.firebaseapp.com",
    databaseURL: "https://teninja-74013.firebaseio.com",
    storageBucket: "teninja-74013.appspot.com"
};

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    HijoComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
