import API from './api';

const getOptions = (): Promise<any> => API.get(`/split-bills/options`);

export default getOptions;
