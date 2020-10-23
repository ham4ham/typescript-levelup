// return a map with keys as 1 - 100, if the key is a multiple of 3 and 5 set the value to 'fizzbuzz',
// if the key is a multiple of 3 set the value to 'fizz', if the key is a multiple of 5 set the valuu to 'buzz'
// if the key doesn't meet any of the above requirements, set the value to empty string

export const fizzBuzz = () => {
  const res: { [key: number]: string } = {};

  for (let i = 1; i < 101; i++) {
    if (i % 15 === 0) {
      res[i] = 'fizzbuzz';
    } else if (i % 5 === 0) {
      res[i] = 'buzz';
    } else if (i % 3 == 0) {
      res[i] = 'fizz';
    } else {
      res[i] = '';
    }
  }

  return res;
};
