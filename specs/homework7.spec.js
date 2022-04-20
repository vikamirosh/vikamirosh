import fetch from 'node-fetch';
import api from '../framework/services';

describe('Airports tests', () => {

    test('GET all airports api/airports 200', async () => {
        const response = await api().Airports().get();
        const data = await response.json();
        expect(response.status).toEqual(200);
      });
    test('Add airport to favorites api/favorites 201', async () => {
        const params = new URLSearchParams();
        params.append('airport_id', 'YAY');
        const response = await api().Airports().add(params);
        const data = await response.json();
        expect(response.status).toEqual(201);
    });
    test('GET all favorites api/favorites 200', async () => {
        const response = await api().Airports().getAll();
        const data = await response.json();
        expect(response.status).toEqual(200);
    });
    test('Confirm added id api/favorites 200', async () => {
        const response = await api().Airports().getAll();
        const data = await response.json();
        const result = data.data.some(function(favoriteObject) {
            return favoriteObject.id === '4699';
          });
        expect(result).toEqual(true);
    });
    test('GET favorite details api/favorites/id 200', async () => {
        const response = await api().Airports().getId();
        const data = await response.json();
        expect(response.status).toEqual(200);
    });
    test('GET non-existing favorite details api/favorites/id 404', async () => {
        const response = await api().Airports().getFailedId();
        const data = await response.json();
        expect(response.status).toEqual(404);
    });
    test('PATCH the note api/favorites/4699 200', async () => {
        const params = new URLSearchParams();
        params.append('note', 'test note');
        const response = await api().Airports().patchNote(params);
        const data = await response.json();
        expect(response.status).toEqual(200);
    });
    test('Remove the note api/favorites/4699 200', async () => {
        const params = new URLSearchParams();
        params.append('note', '');
        const response = await api().Airports().patchNote(params);
        const data = await response.json();
        expect(data.data.attributes.note).toEqual('');
    });
    test('Calculate distance api/airports/distance 200', async () => {
        const params = new URLSearchParams();
        params.append('from', 'SIJ');
        params.append('to', 'GKA');
        const response = await api().Airports().calc(params);
        const data = await response.json();
        expect(response.status).toEqual(200);
    });
    test('Calculate distance with invalid id api/airports/distance 200', async () => {
        const params = new URLSearchParams();
        params.append('from', 'rwerwer');
        params.append('to', 'GKA');
        const response = await api().Airports().calc(params);
        const data = await response.json();
        expect(response.status).toEqual(422);
    });
});