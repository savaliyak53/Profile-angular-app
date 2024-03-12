export interface _SignupData {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  phone: string;
  gender: string;
  address: {
    address: string;
    country: string;
    city: string;
    region: string;
    postalCode: string;
  };
}

export interface _UserData {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}
