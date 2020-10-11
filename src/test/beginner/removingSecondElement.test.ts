import { removingSecondElement } from '../../beginner/removingSecondElement';
test('expect an array of strings with second element removed - pass', async () => {
  const testStringArrayInput = [
    'Rafael',
    'Nadal',
    'wins',
    'the',
    '2020',
    'French',
    'Open',
  ];

  const testStringArrayOutput = [
    'Rafael',
    'wins',
    'the',
    '2020',
    'French',
    'Open',
  ];
  expect(removingSecondElement<string>(testStringArrayInput)).toStrictEqual(
    testStringArrayOutput,
  );
});
