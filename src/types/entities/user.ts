export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  preferredFirstName: string;
  preferredLastName: string | null;
  middleName: string | null;
  address1: string;
  address2: string | null;
  city: string;
  state: string;
  postalCode: string;
  dob: string;
  ssn: string;
  agreedToDisclaimer: boolean;
  status?: string;
  astraUserIntentId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserResponse {
  data: User;
}
