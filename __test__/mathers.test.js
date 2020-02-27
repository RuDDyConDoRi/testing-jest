describe('Comparadores comunes', () => {
    const user = {
        name: "ruddy",
        lastname: "cool"
    }
    const user2 = {
        name: "ruddy2",
        lastname: "cool2"
    }

    const user3 = {
        name: "ruddy",
        lastname: "cool"
    }

    test('igualdad de elementos ', () => {
        expect(user).toEqual(user3);
    });

    test('No son exactamente iguales ', () => {
        expect(user).not.toEqual(user2)
    });
});