interface Address {
  street: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  neighborhood: string;
}

export default interface User {
  name: string;
  email: string;
  password: string;
  role: string;
  addresses: Address[];
}
