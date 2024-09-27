Here's a README file for your `math-easy` npm module:

---

# math-easy

`math-easy` is a lightweight npm module that provides a collection of simple and useful mathematical functions. From factorials and prime number checking to geometric and harmonic means, `math-easy` covers a wide range of mathematical needs, with built-in error handling and type checking.

## Installation

To install the module, use npm:

```bash
npm install math-easy
```

## Usage

After installation, you can import and use any of the available functions in your project.

### Example

```javascript
const math = require('math-easy');

// Factorial of 5
console.log(math.factorial(5)); // Output: 120

// Check if a number is prime
console.log(math.isPrime(7)); // Output: true

// Calculate the GCD of two numbers
console.log(math.gcd(24, 36)); // Output: 12

// Find the LCM of two numbers
console.log(math.lcm(12, 15)); // Output: 60

// Generate Fibonacci sequence up to nth position
console.log(math.fibonacci(7)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]

// Calculate the average of an array of numbers
console.log(math.average([1, 2, 3, 4, 5])); // Output: 3
```

## Available Functions

### Factorial
Calculates the factorial of a non-negative integer.

```javascript
math.factorial(n);
```

- **n**: Non-negative integer
- **Returns**: Factorial of `n`

### isPrime
Checks if a number is a prime number.

```javascript
math.isPrime(num);
```

- **num**: Integer greater than or equal to 2
- **Returns**: `true` if `num` is prime, `false` otherwise

### gcd
Calculates the greatest common divisor (GCD) of two integers.

```javascript
math.gcd(a, b);
```

- **a**, **b**: Integers
- **Returns**: GCD of `a` and `b`

### lcm
Calculates the least common multiple (LCM) of two integers.

```javascript
math.lcm(a, b);
```

- **a**, **b**: Integers
- **Returns**: LCM of `a` and `b`

### fibonacci
Generates the Fibonacci sequence up to the nth number.

```javascript
math.fibonacci(n);
```

- **n**: Non-negative integer
- **Returns**: Array of Fibonacci numbers up to `n`

### randomInt
Generates a random integer between `min` and `max`.

```javascript
math.randomInt(min, max);
```

- **min**, **max**: Integers
- **Returns**: Random integer between `min` and `max`

### sumArray
Calculates the sum of all elements in an array of numbers.

```javascript
math.sumArray(arr);
```

- **arr**: Array of numbers
- **Returns**: Sum of elements in `arr`

### average
Calculates the average of an array of numbers.

```javascript
math.average(arr);
```

- **arr**: Array of numbers
- **Returns**: Average of elements in `arr`

### standardDeviation
Calculates the standard deviation of an array of numbers.

```javascript
math.standardDeviation(arr);
```

- **arr**: Array of numbers
- **Returns**: Standard deviation of elements in `arr`

### median
Calculates the median of an array of numbers.

```javascript
math.median(arr);
```

- **arr**: Array of numbers
- **Returns**: Median of elements in `arr`

### mode
Finds the mode(s) in an array of numbers.

```javascript
math.mode(arr);
```

- **arr**: Array of numbers
- **Returns**: Array of mode(s) from `arr`

### power
Calculates the result of raising a base to an exponent.

```javascript
math.power(base, exponent);
```

- **base**, **exponent**: Numbers
- **Returns**: `base` raised to the power of `exponent`

### nthRoot
Calculates the nth root of a number.

```javascript
math.nthRoot(num, n);
```

- **num**: Number
- **n**: The root
- **Returns**: The nth root of `num`

### logBase
Calculates the logarithm of a number with a specified base.

```javascript
math.logBase(num, base);
```

- **num**, **base**: Numbers
- **Returns**: Logarithm of `num` to the base `base`

### clamp
Clamps a number between two bounds.

```javascript
math.clamp(num, min, max);
```

- **num**, **min**, **max**: Numbers
- **Returns**: `num` clamped between `min` and `max`

### pythagorean
Calculates the hypotenuse of a right triangle given the lengths of the two legs.

```javascript
math.pythagorean(a, b);
```

- **a**, **b**: Lengths of the two legs
- **Returns**: Hypotenuse of the triangle

### euclideanDistance
Calculates the Euclidean distance between two points in n-dimensional space.

```javascript
math.euclideanDistance(pointA, pointB);
```

- **pointA**, **pointB**: Arrays of coordinates
- **Returns**: Euclidean distance between `pointA` and `pointB`

### degreesToRadians
Converts degrees to radians.

```javascript
math.degreesToRadians(degrees);
```

- **degrees**: Angle in degrees
- **Returns**: Angle in radians

### radiansToDegrees
Converts radians to degrees.

```javascript
math.radiansToDegrees(radians);
```

- **radians**: Angle in radians
- **Returns**: Angle in degrees

### quadraticRoots
Solves the quadratic equation ax² + bx + c = 0 and returns the roots.

```javascript
math.quadraticRoots(a, b, c);
```

- **a**, **b**, **c**: Coefficients of the quadratic equation
- **Returns**: Array of two roots

### permutation
Calculates the number of permutations of `n` items taken `r` at a time.

```javascript
math.permutation(n, r);
```

- **n**, **r**: Non-negative integers
- **Returns**: Number of permutations of `n` taken `r` at a time

### combination
Calculates the number of combinations of `n` items taken `r` at a time.

```javascript
math.combination(n, r);
```

- **n**, **r**: Non-negative integers
- **Returns**: Number of combinations of `n` taken `r` at a time

### geometricMean
Calculates the geometric mean of an array of positive numbers.

```javascript
math.geometricMean(arr);
```

- **arr**: Array of positive numbers
- **Returns**: Geometric mean of elements in `arr`

### harmonicMean
Calculates the harmonic mean of an array of positive numbers.

```javascript
math.harmonicMean(arr);
```

- **arr**: Array of positive numbers
- **Returns**: Harmonic mean of elements in `arr`

## Error Handling

Each function has built-in error handling to ensure correct usage. For instance, if a function expects an array of numbers, it will throw an error if passed an invalid argument.

## License

MIT License

---

This provides a comprehensive README that explains how to use your npm module `math-easy`. You can expand or customize this as needed.
