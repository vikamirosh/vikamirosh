import fetch from 'node-fetch';
import urls from '../config/urls';
import header from '../config/header';

const Airports = {
  get: async (params) => {
    const response = await fetch(urls.air + 'api/airports', { method: 'GET' });
    return response;
  },
  add: async (params) => {
    const response = await fetch(`${urls.air}api/favorites?${params}`, { method: 'POST', headers: header });
    return response;
  },
  getAll: async (params) => {
    const response = await fetch(urls.air + 'api/favorites', { method: 'GET', headers: header });
    return response;
  },
  getId: async (params) => {
    const response = await fetch(urls.air + 'api/favorites/4699', { method: 'GET', headers: header });
    return response;
  },
  getFailedId: async (params) => {
    const response = await fetch(urls.air + 'api/favorites/99', { method: 'GET', headers: header });
    return response;
  },
  patchNote: async (params) => {
    const response = await fetch(`${urls.air}api/favorites/4699?${params}`, { method: 'PATCH', headers: header });
    return response;
  },
  calc: async (params) => {
    const response = await fetch(`${urls.air}api/airports/distance?${params}`, { method: 'POST', headers: header });
    return response;
  },

};

export default Airports;