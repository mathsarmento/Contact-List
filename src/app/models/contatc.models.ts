export interface IContact {
  id?: number;
  name: string;
  phone: number;
  birthday: number; //fix
  email: string;
  gender: string;
  localization: ILocalization;
  type: string;
  picture: string; // fix
}

export interface ILocalization {
  country: number;
  zip: number;
  city: string;
  address: string;
  number: number;
  complement: string;
}
