import { Component } from '@angular/core';
import { ContactService } from './services/contact.service';
import { Contact } from './models/contatc.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'listCont';
  public allContacts: Contact[] = [];

  constructor(private contactService: ContactService){
    this.getAllContact()
    console.log(this.allContacts)
  }

  private getAllContact() {
    this.contactService.getContacts()
      .subscribe(contacts => this.allContacts = contacts)
  }
}
