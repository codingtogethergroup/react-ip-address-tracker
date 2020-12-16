export const GEO_API_KEY = 'at_TYVAqs4Dm3J4RMY9ZpnznL3dmLKqR';

export const GET_IP_URL = 'https://api.ipify.org/?format=json';

export const GET_GEO_IP = (ip) =>
  `https://geo.ipify.org/api/v1?apiKey=${GEO_API_KEY}&ipAddress=${ip}`;
