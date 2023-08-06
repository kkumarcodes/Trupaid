import user from './user';
import accounts from './accounts';
import connections from './connections';
import transactionSeries from './transactionSeries';
import getOptions from './splitOptions';

export default {
  ...user,
  ...accounts,
  ...connections,
  transactionSeries,
  getOptions,
};
