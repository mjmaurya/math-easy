const {
    factorial,
    isPrime,
    gcd,
    lcm,
    fibonacci,
    randomInt,
    sumArray,
    average,
    standardDeviation,
    median,
    mode,
    power,
    nthRoot,
    logBase,
    clamp,
    pythagorean,
    euclideanDistance,
    degreesToRadians,
    radiansToDegrees,
    quadraticRoots,
    permutation,
    combination,
    geometricMean,
    harmonicMean
} = require('./index.js');

// Sample test cases (using Jest for example)

test('Factorial of 5 should be 120', () => {
    expect(factorial(5)).toBe(120);
});

test('isPrime should return true for 7', () => {
    expect(isPrime(7)).toBe(true);
});

test('gcd of 8 and 12 should be 4', () => {
    expect(gcd(8, 12)).toBe(4);
});

test('lcm of 6 and 8 should be 24', () => {
    expect(lcm(6, 8)).toBe(24);
});

test('Fibonacci sequence of 5 should be [0, 1, 1, 2, 3, 5]', () => {
    expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3, 5]);
});

test('randomInt between 1 and 10 should be within the range', () => {
    const randomValue = randomInt(1, 10);
    expect(randomValue).toBeGreaterThanOrEqual(1);
    expect(randomValue).toBeLessThanOrEqual(10);
});

test('Sum of array [1, 2, 3] should be 6', () => {
    expect(sumArray([1, 2, 3])).toBe(6);
});

test('Average of array [2, 4, 6] should be 4', () => {
    expect(average([2, 4, 6])).toBe(4);
});

test('Standard deviation of [1, 2, 3, 4] should be 1.118', () => {
    expect(standardDeviation([1, 2, 3, 4])).toBeCloseTo(1.118, 3);
});

test('Median of [1, 2, 3, 4, 5] should be 3', () => {
    expect(median([1, 2, 3, 4, 5])).toBe(3);
});

test('Mode of [1, 2, 2, 3] should be [2]', () => {
    expect(mode([1, 2, 2, 3])).toEqual([2]);
});

test('2 raised to the power of 3 should be 8', () => {
    expect(power(2, 3)).toBe(8);
});

test('Nth root of 27 with n = 3 should be 3', () => {
    expect(nthRoot(27, 3)).toBe(3);
});

test('Log base 2 of 8 should be 3', () => {
    expect(logBase(8, 2)).toBe(3);
});

test('Clamp 15 between 10 and 20 should return 15', () => {
    expect(clamp(15, 10, 20)).toBe(15);
});

test('Pythagorean of sides 3 and 4 should return 5', () => {
    expect(pythagorean(3, 4)).toBeCloseTo(5);
});

test('Euclidean distance between [1, 2] and [4, 6] should be 5', () => {
    expect(euclideanDistance([1, 2], [4, 6])).toBe(5);
});

test('Degrees to radians of 180 should be PI', () => {
    expect(degreesToRadians(180)).toBeCloseTo(Math.PI);
});

test('Radians to degrees of PI should be 180', () => {
    expect(radiansToDegrees(Math.PI)).toBe(180);
});

test('Quadratic roots of x^2 - 3x + 2 should be [2, 1]', () => {
    expect(quadraticRoots(1, -3, 2)).toEqual([2, 1]);
});

test('Permutation of 5, 2 should be 20', () => {
    expect(permutation(5, 2)).toBe(20);
});

test('Combination of 5, 2 should be 10', () => {
    expect(combination(5, 2)).toBe(10);
});

test('Geometric mean of [1, 3, 9] should be 3', () => {
    expect(geometricMean([1, 3, 9])).toBeCloseTo(3);
});

test('Harmonic mean of [1, 2, 4] should be 12/7', () => {
    expect(harmonicMean([1, 2, 4])).toBeCloseTo(12 / 7);
});
