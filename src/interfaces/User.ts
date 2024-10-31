interface TipoPerfil {
  tipo: string;
  nivelAcesso: string;
}

interface Address {
  street: string;
  number: string;
  complement: string;
  district: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

export default interface User {
  name: string;
  email: string;
  senha: string;
  foto?: string;
  tipoPerfil?: TipoPerfil;
  lstAddresses: Address[];
  unidade?: string;
}