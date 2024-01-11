import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { IContact } from 'src/app/models/contatc.models';
import { AuthService } from 'src/app/services/auth.service';
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
    // console.log(this.allContacts);
  }

  ngOnInit() {}

  public logout() {
    this.authService.logout();
  }
  private getAllContact() {
    this.contactService
      .getContacts()
      .snapshotChanges()
      .pipe(map((changes) => changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))))
      .subscribe((data) => {
        this.allContacts = data;
        console.log(this.allContacts);
      });
  }
}
