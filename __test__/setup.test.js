//despues de cada prueba
afterEach(() => console.log('Despues de cada prueba'));
afterAll(() => console.log('Despues de todas las pruebas'));

//antes de cada prueba
beforeEach(() => console.log('Antes de todas las pruebas'));
beforeEach(() => console.log('Antes de cada prueba'));

describe('preparando antes de ejecutar', () => {
    test('Es verdadero', () => {
        expect(true).toBeTruthy();
    });

    test('Es falso', () => {
        expect(false).toBeFalsy();
    });
});