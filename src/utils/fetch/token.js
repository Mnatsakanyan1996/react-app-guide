import { partnerAlias } from 'configs';

export const getToken = () => {
  const data = localStorage.getItem(`token-${partnerAlias}`);
  return data ? JSON.parse(data) : null;
};
