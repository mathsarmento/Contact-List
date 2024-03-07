import { Component } from '@angular/core';
import { format } from 'date-fns';
import { Contact } from 'src/app/models/contact';
import { IContact } from 'src/app/models/contatc.models';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent {
  public newContact: IContact = new Contact();
  public birthday!: Date;
  public loading: boolean = true;
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

  constructor() {}

  public changeGender(event: string) {
    this.gender = event;
    this.newContact.gender = event;
  }

  public test() {
    console.log(this.newContact);
  }

  public console() {
    if (this.birthday) {
      this.newContact.birthday = format(this.birthday, 'dd/MM/yyyy');
    }
    console.log(this.newContact);
  }

  // onChangeInputSecure(event: any) {
  //   this.contact.phone = event;
  //   console.log(this.contact.phone);

  //   // if (!event) {
  //   //   this.contact[altera] = '';
  //   // } else {
  //   //   this.contact[altera] = event;
  //   // }
  // }
}
