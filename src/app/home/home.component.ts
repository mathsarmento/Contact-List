import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { IContact } from '../models/contatc.models';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public displayedColumns: string[] = ['name', 'country', 'phone', 'email', 'birthday', 'actions'];
  public allContacts: IContact[] = [];
  public flags: string[] = [
    '../../assets/icons/brazil.png',
    '../../assets/icons/united-states.png',
    '../../assets/icons/canada.png',
    '../../assets/icons/earth.png',
  ];

  constructor(
    private contactService: ContactService,
    private authService: AuthService
  ) {
    this.getAllContact();
    console.log(this.allContacts);
  }

  ngOnInit() {}

  public logout() {
    this.authService.logout();
  }
  private getAllContact() {
    this.contactService.getContacts().subscribe((contacts) => (this.allContacts = contacts));
  }
}
