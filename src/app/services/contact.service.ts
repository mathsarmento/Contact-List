import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { IContact } from 'src/app/models/contatc.models';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private url = environment.api;
  private dbPath = '/contacts';

  public contacts: AngularFireList<IContact>;

  constructor(private db: AngularFireDatabase) {
    this.contacts = db.list(this.dbPath);
  }

  getContacts() {
    return this.contacts;
    // .snapshotChanges().pipe(
    //   map((changes) => {
    //     return changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }));
    //   })
    // );
  }
}
