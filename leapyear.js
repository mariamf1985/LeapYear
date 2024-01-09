class LeapYear {
    esMultiploDe4(numero) {
        return numero % 4 === 0;
    }

    esMultiploDe400(numero) {
        return numero % 400 === 0;
    }

    esNoMultiploDe400PeroMultiploDe100(numero) {
        return numero % 100 !== 0 && numero % 400 !== 0;
    }
}

module.exports = LeapYear;