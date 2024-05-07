//Validador de cadenas de ADN
// Importar la función a probar
const cadenaADN = require("../dna")
const { validarADN, 
} = require("../index"); // Asegúrate de reemplazar 'tuArchivo.js' con el nombre de tu archivo que contiene la función validarADN

// Pruebas
describe('validarADN', () => {
    test('Debería retornar true para una cadena válida de ADN', () => {
        expect(validarADN('ATCG')).toBe(true);
    });

    test('Debería retornar true para una cadena de ADN más larga válida', () => {
        expect(validarADN('ATCGATCGATCG')).toBe(true);
    });

    test('Debería retornar false para una cadena de ADN inválida', () => {
        expect(validarADN('ctag')).toBe(false);
    });

    test('Debería retornar false para una cadena de ADN inválida', () => {
        expect(validarADN('CTXG')).toBe(false);
    });

    test('Debería retornar false para una cadena vacía', () => {
        expect(validarADN('')).toBe(false);
    });
});