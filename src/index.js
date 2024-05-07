//Validador de cadenas de ADN
const cadenaADN= require("../src/dna")
function validarADN(cadenaADN) {
    // Expresión regular para verificar si la cadena solo contiene A, T, C y G
    var regex = /^[ATCG]+$/;

    // Verificar si la cadena coincide con la expresión regular
    if (regex.test(cadenaADN)) {
        return true; // La cadena es válida
    } else {
        return false; // La cadena no es válida
    }
}
module.exports = {validarADN}


