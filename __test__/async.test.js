import { getDataFromApi } from '../promise';

describe('Probar Async/Await ', () => {

    test ('Realizar test api async-await', async () => {
        const api = 'http://localhost:3000/employees';
        const getNombre = 'http://localhost:3000/employees/1';

        await getDataFromApi(api).then( data => {
            expect(data.length).toBeGreaterThan(0);
        });

        await getDataFromApi(getNombre).then( data => {
            expect(data.first_name).toEqual('Sebastian');
        });

    });
/*
    test ('Realizando una peticion a una api con error', async () => {
        const apiError = 'http://httpstat.us/404';
        const peticion = getDataFromApi(apiError);

        await expect(peticion).rejects.toEqual(Error('Request failed with status code 404'));
    });*/
    
    test('Resuelve hola', async () => {
        await expect(Promise.resolve('Hola!')).resolves.toBe('Hola!');
        await expect(Promise.reject('Error')).rejects.toBe('Error');
    });

});