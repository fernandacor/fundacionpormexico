// import { sumarNumeros } from './sum';
const sumarNumeros = require('./sum')

test('adds 1 + 2 to equal 3', () => {
    expect(sumarNumeros(1, 2)).toBe(3);
});