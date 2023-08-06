import API from './api';
import { AccountResponse, PrimaryAccount } from 'types/entities/accounts';

const getAccounts = (): Promise<AccountResponse> => API.get(`/astra/accounts`);
const createPrimaryAccount = (tokenKey: string): Promise<PrimaryAccount> =>
  API.get(`astra/accounts/${tokenKey}/set-primary`);

export default {
  getAccounts,
  createPrimaryAccount,
};
