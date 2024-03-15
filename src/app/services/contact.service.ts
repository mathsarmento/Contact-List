import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { IContact } from 'src/app/models/contatc.models';
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private dbPath = '/contacts';

  public contacts: AngularFireList<IContact>;

  constructor(private db: AngularFireDatabase) {
    this.contacts = db.list(this.dbPath);
  }

  getContacts() {
    return this.contacts;
  }

  postContact(contact: IContact) {}
}
