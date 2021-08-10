const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
    test('should multiply two positive numbers correctly', () => {
        const result = multiply(5,2)
        expect(result).toBe(10)
    })

    test('should return negative value when multiplying a negative by a positive', () => {
        const result = multiply(-5,3)
        expect(result).toBe(-15)
    })
    test('should return 0 when multiplying any number by 0', () => {
        const result = multiply(5,0)
        expect(result).toBe(0)
    })
})