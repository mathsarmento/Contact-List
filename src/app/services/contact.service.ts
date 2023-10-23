import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Contact } from "../models/contatc.models";

@Injectable({
  providedIn: 'root'
})
export class ContactService{
  private url = environment.api

  constructor(private httpClient: HttpClient){
  }

  getContacts(){
    return this.httpClient.get<Contact[]>(this.url + '/contacts')
  }
}
