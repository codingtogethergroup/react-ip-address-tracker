export const GEO_API_KEY = 'at_TYVAqs4Dm3J4RMY9ZpnznL3dmLKqR';

export const GET_IP_URL = 'https://api.ipify.org/?format=json';

export const GET_GEO_IP = (type, value) =>
  type === 'domain'
    ? `https://geo.ipify.org/api/v1?apiKey=${GEO_API_KEY}&domain=${value}`
    : `https://geo.ipify.org/api/v1?apiKey=${GEO_API_KEY}&ipAddress=${value}`;
