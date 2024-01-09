const { expect } = require("@jest/globals");
const LeapYear = require("../leapyear");

const leap_year = new LeapYear();

describe('Tests que validan los múltiplos de 4 y 400', () => {

    test('Test para un año que no es bisiesto (no divisible por 4)', () => {
        const numero_ingresado = 1997;
        const respuesta_esperada = false;
        const respuesta_recibida = leap_year.esMultiploDe4(numero_ingresado);
        expect(respuesta_recibida).toBe(respuesta_esperada);
    })

    test('Test para un año bisiesto (divisible por 4)', () => {
        const numero_ingresado = 1996;
        const respuesta_esperada = true;
        const respuesta_recibida = leap_year.esMultiploDe4(numero_ingresado);
        expect(respuesta_recibida).toBe(respuesta_esperada);
    })

    test('Test para un año bisiesto (divisible por 400)', () => {
        const numero_ingresado = 1600;
        const respuesta_esperada = true;
        const respuesta_recibida = leap_year.esMultiploDe400(numero_ingresado);
        expect(respuesta_recibida).toBe(respuesta_esperada);
    })

    test('Test para un año que no es bisiesto (no divisible por 400 pero divisible por 100)', () => {
        const numero_ingresado = 1800;
        const respuesta_esperada = false;
        const respuesta_recibida = leap_year.esNoMultiploDe400PeroMultiploDe100(numero_ingresado);
        expect(respuesta_recibida).toBe(respuesta_esperada);
    })

})