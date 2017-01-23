import { Component, OnInit } from '@angular/core';
import { Contact } from "../shared/contact";   // Be sure to import Contact and OnInit 

@Component({
  selector: 'app-contact',                        // IMPORTANT:  This selectors must to be unique
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    contactSelected: Contact;   // Public var type Contact 

    constructor() { }

    ngOnInit() {
        this.contactSelected = new Contact(0, 'unknown.jpg', 'Mario', 'González', '200 Newbury St.', '02116', 'Boston', '(555) 1234-567', 'mariog@gmail.com', true);

    }

}
