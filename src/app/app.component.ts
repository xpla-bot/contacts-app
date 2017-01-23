import { Component, OnInit } from '@angular/core';
import { Contact } from "./shared/contact";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {     // Add OnInit lifeCycle hook. This launch the ngOnInit function when the component starts

    contactSelected: Contact;   // Public var type Contact 

    ngOnInit() {
        this.contactSelected = new Contact(0, 'unknown.jpg', 'Mario', 'González', '200 Newbury St.', '02116', 'Boston', '(555) 1234-567', 'mariog@gmail.com', true);

    }

}
