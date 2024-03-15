import { IContact, ILocalization } from 'src/app/models/contatc.models';

export class Contact implements IContact {
  key = '';
  name = '';
  phone = '';
  birthday = ''; //fix
  email = '';
  gender = '';
  localization = new Localization();
  type = '';
  picture = ''; // fix
}

export class Localization implements ILocalization {
  country = 0;
  zip = '';
  state = '';
  city = '';
  address = '';
  number = '';
  complement = '';
}
