import Airports from './airports.service';

const api = () => ({
  Airports: () => ({ ...Airports}),
});

export default api;