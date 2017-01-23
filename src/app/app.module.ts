/*
  This procces will be automatic if the component is created with Angular CLI: "ng generate component contact"  or  "ng g c contact"
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';   // Import contact component.

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent      // Add new contact component here
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
