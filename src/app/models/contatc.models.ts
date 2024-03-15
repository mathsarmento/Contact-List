export interface IContact {
  key: string | null;
  name?: string;
  phone?: string;
  birthday?: string;
  email?: string;
  gender?: string;
  localization?: ILocalization;
  type?: string;
  picture?: string;
}

export interface ILocalization {
  country: number;
  zip: string;
  state: string;
  city: string;
  address: string;
  number: string;
  complement: string;
}
