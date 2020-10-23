import { fizzBuzz } from '../../beginner/fizzBuzz';

test('expect a map of keys 1 to 100 with values of fizz, buzz or fizzbuzz', async () => {
  const fizzBuzzMap = fizzBuzz();

  expect(fizzBuzzMap[3]).toBe('fizz');
  expect(fizzBuzzMap[5]).toBe('buzz');
  expect(fizzBuzzMap[15]).toBe('fizzbuzz');
  expect(fizzBuzzMap[39]).toBe('fizz');
  expect(fizzBuzzMap[40]).toBe('buzz');
  expect(fizzBuzzMap[45]).toBe('fizzbuzz');
  expect(fizzBuzzMap[4]).toBe('');
});
