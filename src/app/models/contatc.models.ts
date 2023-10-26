export interface Contact {
  id?: number;
  name: string;
  phone: number;
  birthday: number; //fix
  email: string;
  gender: string;
  localization: Localization;
  type: string;
  picture: string; // fix
}

interface Localization {
  country: number;
  zip: number;
  city: string;
  address: string;
  number: number;
  complement: string;
}
