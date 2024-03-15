import { Component } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { IContact } from 'src/app/models/contatc.models';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent {
  public newContact: IContact = new Contact();
  public birthday!: Date;
  public loading: boolean = false;
  public teste: boolean = false;
  public dateNow: Date = new Date();
  public gender: string = '';

  public typesContact = [
    { value: 'family', viewValue: 'Family' },
    { value: 'company', viewValue: 'Company' },
    { value: 'friend', viewValue: 'Friend' },
  ];

  public countrys = [
    { value: 0, viewValue: 'Brazil', img: '../../assets/icons/brazil.png' },
    { value: 1, viewValue: 'EUA', img: '../../assets/icons/united-states.png' },
    { value: 2, viewValue: 'Canada', img: '../../assets/icons/canada.png' },
    { value: 3, viewValue: 'Other', img: '../../assets/icons/earth.png' },
  ];

  constructor(
    private contactService: ContactService // private authService: AuthService
  ) {}

  public changeGender(event: string) {
    this.gender = event;
    this.newContact.gender = event;
  }

  public test() {
    console.log(this.newContact);
  }

  public submit() {
    this.contactService.postContact(this.newContact);
  }
}
