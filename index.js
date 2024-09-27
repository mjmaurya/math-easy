/**
 * Calculates the factorial of a non-negative integer.
 * @param {number} n - A non-negative integer.
 * @returns {number} - The factorial of the number.
 * @throws {Error} - If the argument is not a non-negative integer.
 */
function factorial(n) {
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
        throw new Error('Argument must be a non-negative integer.');
    }
    return n === 0 ? 1 : n * factorial(n - 1);
}

/**
 * Checks if a number is prime.
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is prime, false otherwise.
 * @throws {Error} - If the argument is not a positive integer.
 */
function isPrime(num) {
    if (typeof num !== 'number' || num < 2 || !Number.isInteger(num)) {
        throw new Error('Argument must be an integer greater than or equal to 2.');
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


/**
 * Calculates the greatest common divisor (GCD) of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The GCD of the two numbers.
 * @throws {Error} - If either argument is not an integer.
 */
function gcd(a, b) {
    if (typeof a !== 'number' || !Number.isInteger(a) || typeof b !== 'number' || !Number.isInteger(b)) {
        throw new Error('Both arguments must be integers.');
    }
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}


/**
 * Calculates the least common multiple (LCM) of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The LCM of the two numbers.
 * @throws {Error} - If either argument is not an integer.
 */
function lcm(a, b) {
    if (typeof a !== 'number' || !Number.isInteger(a) || typeof b !== 'number' || !Number.isInteger(b)) {
        throw new Error('Both arguments must be integers.');
    }
    return Math.abs(a * b) / gcd(a, b);
}


/**
 * Calculates the Fibonacci sequence up to the nth number.
 * @param {number} n - A non-negative integer.
 * @returns {number[]} - An array of Fibonacci numbers up to the nth position.
 * @throws {Error} - If the argument is not a non-negative integer.
 */
function fibonacci(n) {
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
        throw new Error('Argument must be a non-negative integer.');
    }
    const fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n + 1);
}



/**
 * Generates a random integer between min and max (inclusive).
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} - A random integer between min and max.
 * @throws {Error} - If either argument is not a number.
 */
function randomInt(min, max) {
    if (typeof min !== 'number' || typeof max !== 'number' || !Number.isInteger(min) || !Number.isInteger(max)) {
        throw new Error('Both arguments must be integers.');
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/**
 * Calculates the sum of all elements in an array of numbers.
 * @param {number[]} arr - An array of numbers.
 * @returns {number} - The sum of the numbers in the array.
 * @throws {Error} - If the argument is not an array of numbers.
 */
function sumArray(arr) {
    if (!Array.isArray(arr) || !arr.every(n => typeof n === 'number')) {
        throw new Error('Argument must be an array of numbers.');
    }
    return arr.reduce((sum, num) => sum + num, 0);
}


/**
 * Calculates the average of an array of numbers.
 * @param {number[]} arr - An array of numbers.
 * @returns {number} - The average of the numbers in the array.
 * @throws {Error} - If the argument is not an array of numbers.
 */
function average(arr) {
    if (!Array.isArray(arr) || !arr.every(n => typeof n === 'number')) {
        throw new Error('Argument must be an array of numbers.');
    }
    return sumArray(arr) / arr.length;
}


/**
 * Calculates the standard deviation of an array of numbers.
 * @param {number[]} arr - An array of numbers.
 * @returns {number} - The standard deviation of the numbers in the array.
 * @throws {Error} - If the argument is not an array of numbers.
 */
function standardDeviation(arr) {
    if (!Array.isArray(arr) || !arr.every(n => typeof n === 'number')) {
        throw new Error('Argument must be an array of numbers.');
    }
    const avg = average(arr);
    const squareDiffs = arr.map(num => Math.pow(num - avg, 2));
    return Math.sqrt(average(squareDiffs));
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} arr - An array of numbers.
 * @returns {number} - The median of the numbers in the array.
 * @throws {Error} - If the argument is not an array of numbers.
 */
function median(arr) {
    if (!Array.isArray(arr) || !arr.every(n => typeof n === 'number')) {
        throw new Error('Argument must be an array of numbers.');
    }
    const sorted = arr.slice().sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}


/**
 * Calculates the mode of an array of numbers (the number that appears most frequently).
 * @param {number[]} arr - An array of numbers.
 * @returns {number[]} - An array of modes (numbers that appear most frequently).
 * @throws {Error} - If the argument is not an array of numbers.
 */
function mode(arr) {
    if (!Array.isArray(arr) || !arr.every(n => typeof n === 'number')) {
        throw new Error('Argument must be an array of numbers.');
    }
    const frequency = {};
    arr.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
    });
    const maxFreq = Math.max(...Object.values(frequency));
    return Object.keys(frequency).filter(num => frequency[num] === maxFreq).map(Number);
}


/**
 * Calculates the result of raising a base to an exponent.
 * @param {number} base - The base number.
 * @param {number} exponent - The exponent.
 * @returns {number} - The result of base raised to the exponent.
 * @throws {Error} - If either argument is not a number.
 */
function power(base, exponent) {
    if (typeof base !== 'number' || typeof exponent !== 'number') {
        throw new Error('Both arguments must be numbers.');
    }
    return Math.pow(base, exponent);
}


/**
 * Calculates the nth root of a number.
 * @param {number} num - The number.
 * @param {number} n - The root to calculate.
 * @returns {number} - The nth root of the number.
 * @throws {Error} - If either argument is not a number.
 */
function nthRoot(num, n) {
    if (typeof num !== 'number' || typeof n !== 'number') {
        throw new Error('Both arguments must be numbers.');
    }
    return Math.pow(num, 1 / n);
}


/**
 * Calculates the logarithm of a number with a specified base.
 * @param {number} num - The number.
 * @param {number} base - The base of the logarithm.
 * @returns {number} - The logarithm of the number with the specified base.
 * @throws {Error} - If either argument is not a number.
 */
function logBase(num, base) {
    if (typeof num !== 'number' || typeof base !== 'number') {
        throw new Error('Both arguments must be numbers.');
    }
    return Math.log(num) / Math.log(base);
}

/**
 * Clamps a number between two bounds.
 * @param {number} num - The number to clamp.
 * @param {number} min - The lower bound.
 * @param {number} max - The upper bound.
 * @returns {number} - The clamped number.
 * @throws {Error} - If any argument is not a number.
 */
function clamp(num, min, max) {
    if (typeof num !== 'number' || typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('All arguments must be numbers.');
    }
    return Math.min(Math.max(num, min), max);
}


/**
 * Calculates the hypotenuse of a right triangle given the lengths of the two legs.
 * @param {number} a - The length of one leg.
 * @param {number} b - The length of the other leg.
 * @returns {number} - The length of the hypotenuse.
 * @throws {Error} - If either argument is not a number.
 */
function pythagorean(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers.');
    }
    return Math.sqrt(a * a + b * b);
}


/**
 * Calculates the Euclidean distance between two points in n-dimensional space.
 * @param {number[]} pointA - Coordinates of the first point.
 * @param {number[]} pointB - Coordinates of the second point.
 * @returns {number} - The Euclidean distance between the two points.
 * @throws {Error} - If the arguments are not arrays of the same length, or if they don't contain numbers.
 */
function euclideanDistance(pointA, pointB) {
    if (!Array.isArray(pointA) || !Array.isArray(pointB)) {
        throw new Error('Both arguments must be arrays.');
    }
    if (pointA.length !== pointB.length) {
        throw new Error('Both arrays must have the same length.');
    }
    if (!pointA.every(n => typeof n === 'number') || !pointB.every(n => typeof n === 'number')) {
        throw new Error('Both arrays must contain only numbers.');
    }
    const sumOfSquares = pointA.reduce((sum, coord, i) => sum + Math.pow(coord - pointB[i], 2), 0);
    return Math.sqrt(sumOfSquares);
}

/**
 * Converts degrees to radians.
 * @param {number} degrees - The angle in degrees.
 * @returns {number} - The angle in radians.
 * @throws {Error} - If the argument is not a number.
 */
function degreesToRadians(degrees) {
    if (typeof degrees !== 'number') {
        throw new Error('Argument must be a number.');
    }
    return degrees * (Math.PI / 180);
}


/**
 * Converts radians to degrees.
 * @param {number} radians - The angle in radians.
 * @returns {number} - The angle in degrees.
 * @throws {Error} - If the argument is not a number.
 */
function radiansToDegrees(radians) {
    if (typeof radians !== 'number') {
        throw new Error('Argument must be a number.');
    }
    return radians * (180 / Math.PI);
}


/**
 * Solves the quadratic equation ax^2 + bx + c = 0 and returns the roots.
 * @param {number} a - Coefficient of x^2.
 * @param {number} b - Coefficient of x.
 * @param {number} c - Constant term.
 * @returns {number[]} - An array containing the two roots (real or complex).
 * @throws {Error} - If any argument is not a number.
 */
function quadraticRoots(a, b, c) {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        throw new Error('All arguments must be numbers.');
    }
    const discriminant = Math.pow(b, 2) - 4 * a * c;
    if (discriminant >= 0) {
        return [
            (-b + Math.sqrt(discriminant)) / (2 * a),
            (-b - Math.sqrt(discriminant)) / (2 * a)
        ];
    } else {
        return [
            `${-b / (2 * a)} + ${Math.sqrt(-discriminant) / (2 * a)}i`,
            `${-b / (2 * a)} - ${Math.sqrt(-discriminant) / (2 * a)}i`
        ];
    }
}

/**
 * Calculates the number of permutations (arrangements) of n items taken r at a time.
 * @param {number} n - The total number of items.
 * @param {number} r - The number of items to arrange.
 * @returns {number} - The number of permutations.
 * @throws {Error} - If n or r is not a non-negative integer or r > n.
 */
function permutation(n, r) {
    if (typeof n !== 'number' || typeof r !== 'number' || !Number.isInteger(n) || !Number.isInteger(r) || n < 0 || r < 0 || r > n) {
        throw new Error('Both arguments must be non-negative integers and r must be <= n.');
    }
    return factorial(n) / factorial(n - r);
}

/**
 * Calculates the number of combinations (selections) of n items taken r at a time.
 * @param {number} n - The total number of items.
 * @param {number} r - The number of items to select.
 * @returns {number} - The number of combinations.
 * @throws {Error} - If n or r is not a non-negative integer or r > n.
 */
function combination(n, r) {
    if (typeof n !== 'number' || typeof r !== 'number' || !Number.isInteger(n) || !Number.isInteger(r) || n < 0 || r < 0 || r > n) {
        throw new Error('Both arguments must be non-negative integers and r must be <= n.');
    }
    return factorial(n) / (factorial(r) * factorial(n - r));
}

/**
 * Calculates the geometric mean of an array of positive numbers.
 * @param {number[]} arr - An array of positive numbers.
 * @returns {number} - The geometric mean of the numbers.
 * @throws {Error} - If the argument is not an array of positive numbers.
 */
function geometricMean(arr) {
    if (!Array.isArray(arr) || !arr.every(n => typeof n === 'number' && n > 0)) {
        throw new Error('Argument must be an array of positive numbers.');
    }
    return Math.pow(arr.reduce((prod, num) => prod * num, 1), 1 / arr.length);
}

/**
 * Calculates the harmonic mean of an array of positive numbers.
 * @param {number[]} arr - An array of positive numbers.
 * @returns {number} - The harmonic mean of the numbers.
 * @throws {Error} - If the argument is not an array of positive numbers.
 */
function harmonicMean(arr) {
    if (!Array.isArray(arr) || !arr.every(n => typeof n === 'number' && n > 0)) {
        throw new Error('Argument must be an array of positive numbers.');
    }
    return arr.length / arr.reduce((sum, num) => sum + 1 / num, 0);
}

module.exports = {
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
};