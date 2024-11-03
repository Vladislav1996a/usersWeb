interface Address {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
}

interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

interface Company {
  department: string;
  name: string;
  title: string;
  address: Address;
}

interface Crypto {
  coin: string;
  wallet: string;
  network: string;
}

interface Hair {
  color: string;
  type: string;
}

export interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  username: string;
  password: string;
  birthDate: string;
  ssn: string;
  phone: string;
  university: string;
  image: string;
  address: Address;
  bank: Bank;
  company: Company;
  crypto: Crypto;
  ein: string;
  eyeColor: string;
  hair: Hair;
  height: number;
  weight: number;
  bloodGroup: string;
  ip: string;
  macAddress: string;
  userAgent: string;
  role: string;
}

export interface IconSvgProps {
  disabled: boolean;
}
