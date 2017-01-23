import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';   // Import contact component.
import { USPhonePipe } from "./shared/us-phone.pipe";            // Advanced: Add a pipe to format the us phone number displayed 

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,     
    USPhonePipe         // Add pipe here
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
