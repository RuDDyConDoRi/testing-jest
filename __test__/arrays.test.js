import {arrayColores, arrayFrutas} from '../arrays';

describe('Comprobaremos que existe un elemento', () => {
    test('Tienen banana? ', () => {
        expect(arrayFrutas()).toContain('banana');
    });

    test('No contiene platano!!!', () => {
        expect(arrayFrutas()).not.toContain('platano');
    });

    test('Comprobar el tamaño de un arreglo!', () => {
        expect(arrayFrutas()).toHaveLength(6);
    });

});