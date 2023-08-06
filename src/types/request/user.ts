export interface CreateUser {
  id?: string | undefined;
  phoneNumber: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postalCode: string;
  dob: string;
  ssn: string;
  firstName: string;
  lastName: string;
  preferredName: string;
  astraRedirectUri: string;
}
