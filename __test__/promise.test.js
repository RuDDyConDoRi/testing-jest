import { getDataFromApi } from '../promise';

describe('Probando promesas!!! ', () => {
    test('Realizando una peticion a una API', done => {

        const api = 'http://localhost:3000/employees'

        getDataFromApi(api).then( data => {
            console.log(data);
            expect(data.length).toBeGreaterThan(0);
            done();
        })       
    });

    test('Resuelve hola', () => {
        return expect(Promise.resolve('Hola!')).resolves.toBe('Hola!');
    });

    test('Resuelve con error', () => {
        return expect(Promise.reject('Error')).rejects.toBe('Error');
    });
});