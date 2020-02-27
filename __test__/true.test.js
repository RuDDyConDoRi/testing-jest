import {isNull, isTrue, isFalse, isUndefined} from '../true';

describe('Probar resultados nulos', () => {
    test('null ', () => {
        expect(isNull()).toBeNull();
    });
});