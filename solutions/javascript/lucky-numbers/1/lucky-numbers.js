// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let start1 = 0;
  let end1 = array1.length;
  let arraysum1 = '';

  for (let i = start1; i < end1; i++) {
     arraysum1 += String(array1[i]);
     arraysum1;
  }

  let start2 = 0;
  let end2 = array2.length;
  let arraysum2 = '';

  for (let i = start2; i < end2; i++) {
     arraysum2 += String(array2[i]);
     arraysum2;
  }

  return Number (arraysum1) + Number(arraysum2);
 
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const number = String(value);
  const reverseNumber = number.split('').reverse().join('');
  return number === reverseNumber;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
 if (input === null || input === undefined || input === '') {
    return 'Required field';
  }

  const num = Number(input);

  if (Number.isNaN(num) || num === 0) {
    return 'Must be a number besides 0';
  }

  return '';
}
