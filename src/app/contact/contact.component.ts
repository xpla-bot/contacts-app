import { Component, OnInit } from '@angular/core';
import { Contact } from "../shared/contact";   // Be sure to import Contact and OnInit 
import { USPhonePipe } from "../shared/us-phone.pipe";     /* Advanced: Add a pipe to format the us phone number displayed in the contact */

@Component({
  selector: 'app-contact',                        // IMPORTANT:  This selectors must to be unique
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    contactSelected: Contact;   // Public var type Contact 

    constructor() { }

    ngOnInit() {
        this.contactSelected = new Contact(0, 'unknown.jpg', 'Mario', 'González', '200 Newbury St.', '02116', 'Boston', '5551234567', 'mariog@gmail.com', true);

    }

}
