import { callbackHell } from '../callbacks';

describe('probando un Callback', () => {
    test('Callback ', done => {
        function otherCallBack(data) {
            expect(data).toBe(' Hola Javascripters ');
            done();
        }
        callbackHell(otherCallBack);  
    });    
});

