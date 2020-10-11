import {
  addition,
  subtraction,
  multiplication,
  division,
  exponents,
} from '../../newbie/basicMath';

test('should return the sum of two numbers - pass', async () => {
  expect(addition(4, 1)).toBe(5);
  expect(addition(10000, 25)).toBe(10025);
});

test('should return the difference of two numbers - pass', async () => {
  expect(subtraction(4, 1)).toBe(3);
  expect(subtraction(1000, 20)).toBe(980);
  expect(subtraction(10, 25)).toBe(-15);
});

test('should return the product of two numbers - pass', async () => {
  expect(multiplication(4, 1)).toBe(4);
  expect(multiplication(10, 25)).toBe(250);
  expect(multiplication(10, 0)).toBe(0);
});

test('should return the quotient of two numbers - pass', async () => {
  expect(division(4, 1)).toBe(4);
  expect(division(81, 9)).toBe(9);
  expect(division(20, 0)).toBe(Infinity);
});

test('should return the exponential result of a number raised to the power of another number - pass', async () => {
  expect(exponents(4, 2)).toBe(16);
  expect(exponents(9, 0)).toBe(1);
  expect(exponents(3, 3)).toBe(27);
  expect(exponents(15, 1)).toBe(15);
});
