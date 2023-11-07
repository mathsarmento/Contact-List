import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IContact } from '../models/contatc.models';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private url = environment.api;

  constructor(private httpClient: HttpClient) {}

  getContacts() {
    return this.httpClient.get<IContact[]>(this.url + '/contacts');
  }
}
