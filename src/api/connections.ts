import API from './api';

const getConnections = (): Promise<any> =>
  API.get(`/connections?status=pending,accepted`);
const createNewConnection = (data: any): Promise<any> =>
  API.post(`/connections`, data);

export default { getConnections, createNewConnection };
