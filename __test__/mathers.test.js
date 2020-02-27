describe('Comparadores comunes', () => {
    const user = {
        name: "ruddy",
        lastname: "cool"
    }
    const user2 = {
        name: "ruddy2",
        lastname: "cool2"
    }

    test('igualdad de elementos ', () => {
        expect(user).toEqual(user2);
    });

    test('No son exactamente iguales ', () => {
        expect(user).not.toEqual(user2)
    });
});