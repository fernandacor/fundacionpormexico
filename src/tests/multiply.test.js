const multiply = require('./multiply');
// import { multiply } from './multiply';

test('multiply 1 * 2 to equal 2', () => {
    expect(multiply(1, 2)).toBe(2);
});