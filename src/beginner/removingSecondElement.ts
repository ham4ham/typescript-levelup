// Given an array, remove the second element and return the array

export const removingSecondElement = <T>(arr: T[]) => {
  return arr.filter((val, idx) => idx !== 1);
};
