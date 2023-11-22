import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact';
import { IContact } from 'src/app/models/contatc.models';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent {
  public contact: IContact = new Contact();
  public loading: boolean = true;
  public teste: boolean = false;
  public dateNow: Date = new Date();

  public typesContact = [
    { value: 'family', viewValue: 'Family' },
    { value: 'company', viewValue: 'Company' },
    { value: 'friend', viewValue: 'Friend' },
  ];

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {
    this.delayfake();
  }

  public test() {
    console.log(this.contact);
  }

  onChangeInputSecure(event: any) {
    this.contact.phone = event;
    console.log(this.contact.phone);

    // if (!event) {
    //   this.contact[altera] = '';
    // } else {
    //   this.contact[altera] = event;
    // }
  }

  public delayfake() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
