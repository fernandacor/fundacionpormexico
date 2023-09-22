const DeleteButton = require('./DeleteButton');
const handleClick = require('./DeleteButton');
const deleteOne = require('./DeleteButton');

describe('DeleteButton', () => {
    test('DeleteButton', () => {
        expect(DeleteButton).toBeDefined();
    });

    test('handleClick', () => {
        expect(handleClick).toBeDefined();
    });

    test('handleClick', () => {
        expect(handleClick).toBeTruthy();
    });
});