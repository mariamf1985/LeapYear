const {expect} = require("@jest/globals");
const LeapYear = require("../leapyear");

const leap_year = new LeapYear();

describe('Tests que validan los múltiplos de 4 y 400', () => {

    /** 
         * 1.Cuando el usuario digite un número no divisible por 4, devuelve false,
         * 2.Cuando el usuario digite un número divisible por 4, devuelve true,
         * 3.Cuando el usuario digite un número divisible por 400, devuelve true,
         * 4.Cuando el usuario digite un número que no sea divisible 400, devuelve false.
    */

    test('Test devuelve false cuando no divisible por 4', () => {

        /**
         * GHERKIN TEST
            * GIVEN / ARRANGE: un número
            * WHEN / ACT: cuando este no sea divisible por 4
            * THEN / ASSERT: devuelve false como resultado
         */

        //ARRANGE: para el escenario
        const numero_ingresado = 1997;
        const respuesta_esperada = "false";
        

        //ACT: ejecutar el escenario
        const respuesta_recibida = leap_year.validar_primos_4(numero_ingresado);

        //ASSERT: comprobar escenario
        expect(respuesta_recibida).toBe(respuesta_esperada);

    })

    test('Test devuelve true cuando divisible por 4', () => {

        /**
         * GHERKIN TEST
            * GIVEN / ARRANGE: un número
            * WHEN / ACT: cuando este sea divisible por 4
            * THEN / ASSERT: devuelve true como resultado
         */

        //ARRANGE: para el escenario
        const numero_ingresado = 1996;
        const respuesta_esperada = "true";
        

        //ACT: ejecutar el escenario
        const respuesta_recibida = leap_year.validar_primos_4(numero_ingresado);

        //ASSERT: comprobar escenario
        expect(respuesta_recibida).toBe(respuesta_esperada);

    })

    test('Test devuelve true cuando divisible por 400', () => {

        /**
         * GHERKIN TEST
            * GIVEN / ARRANGE: un número
            * WHEN / ACT: cuando este sea divisible por 400
            * THEN / ASSERT: devuelve true como resultado
         */

        //ARRANGE: para el escenario
        const numero_ingresado = 1600;
        const respuesta_esperada = "true";
        

        //ACT: ejecutar el escenario
        const respuesta_recibida = fizz_buzz.validar_primos_400(numero_ingresado);

        //ASSERT: comprobar escenario
        expect(respuesta_recibida).toBe(respuesta_esperada);

    })

    test('Test devuelve false cuando no es divisible por 400 pero si es divisible por 100', () => {

        /**
         * GHERKIN TEST
            * GIVEN / ARRANGE: un número
            * WHEN / ACT: cuando este no sea divisible por 400 pero si por 100
            * THEN / ASSERT: devuelve false como resultado
         */

        //ARRANGE: para el escenario
        const numero_ingresado = 1800;
        const respuesta_esperada = false;
        

        //ACT: ejecutar el escenario
        const respuesta_recibida = leap_year.validar_primos_100_no_400(numero_ingresado);

        //ASSERT: comprobar escenario
        expect(respuesta_recibida).toBe(respuesta_esperada);

    })

})