import { partnerAlias } from 'configs';

export const getToken = () => {
  const data = localStorage.getItem(`${partnerAlias}`);
  return data ? JSON.parse(data) : null;
};
