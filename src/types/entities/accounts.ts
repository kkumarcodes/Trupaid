export interface Account {
  availableBalance: string;
  connectionStatus: string;
  createdAt: string;
  currentBalance: string;
  id: string;
  institutionLogo: string;
  institutionName: string;
  isPrimary: boolean;
  lastBalanceUpdateOn: string;
  mask: string;
  name: string;
  nickname: string;
  officialName: string;
  subtype: string;
  type: string;
  updatedAt: string;
}

export interface AccountResponse {
  data: Array<Account>;
}

export interface PrimaryAccount {
  availableBalance: string;
  connectionStatus: string;
  createdAt: string;
  currentBalance: string;
  id: string;
  institutionLogo: string;
  institutionName: string;
  isPrimary: boolean;
  lastBalanceUpdateOn: string;
  mask: string;
  name: string;
  nickname: string;
  officialName: string;
  subtype: string;
  type: string;
  updatedAt: string;
}
