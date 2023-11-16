export interface IContact {
  id?: number;
  name: string;
  phone: string;
  birthday: string; //fix
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
