import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contatc.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public displayedColumns: string[] = ['name', 'country', 'phone', 'email', 'birthday', 'actions'];
  public allContacts: Contact[] = [];
  public flags: string[] = [
    '../../assets/icons/brazil.png',
    '../../assets/icons/united-states.png',
    '../../assets/icons/canada.png',
    '../../assets/icons/earth.png',
  ];

  constructor(private contactService: ContactService) {
    this.getAllContact();
    console.log(this.allContacts);
  }

  ngOnInit() {}

  private getAllContact() {
    this.contactService.getContacts().subscribe((contacts) => (this.allContacts = contacts));
  }
}
