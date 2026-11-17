// JavaScript Problem Sets — 7.1 Beginner Level and 7.2 Array Problems
// Run: node javascript_problem_sets.js

console.log('=== 7.1 BEGINNER LEVEL ===');

// Section 1: Variables and Data Types
{
  const userName = 'Radomir';
  const userAge = 17;
  const isStudent = true;
  console.log('1.', userName, userAge, isStudent);

  const firstName = 'Radomir';
  const lastName = 'Konovalov';
  const fullName = firstName + ' ' + lastName;
  console.log('2.', fullName);

  const num1 = 10, num2 = 5;
  console.log('3. Sum:', num1 + num2, 'Difference:', num1 - num2, 'Product:', num1 * num2, 'Quotient:', num1 / num2);

  const testValue = 100;
  console.log('4.', typeof testValue);
}

// Section 2: Conditional Statements
{
  const checkNumber = 17;
  if (checkNumber % 2 === 0) console.log('5. Even');
  else console.log('5. Odd');

  const age = 20;
  if (age >= 18) console.log('6. Can vote');
  else console.log('6. Cannot vote yet');

  const score = 85;
  if (score >= 90) console.log('7. A');
  else if (score >= 80) console.log('7. B');
  else if (score >= 70) console.log('7. C');
  else console.log('7. F');

  console.log('8.', age >= 18 ? 'Can vote' : 'Cannot vote yet');

  const temp1 = 10, temp2 = 10;
  if (temp1 === temp2) console.log('9. Equal');
  else console.log('9. Not equal');
}

// Section 3: Loops
{
  console.log('10. For loop:');
  for (let i = 1; i <= 10; i++) console.log(i);

  console.log('11. Countdown:');
  let count = 5;
  while (count >= 1) { console.log(count); count--; }

  let total = 0;
  for (let i = 1; i <= 50; i++) total += i;
  console.log('12.', total);

  console.log('13. Skip 7:');
  for (let i = 1; i <= 10; i++) {
    if (i === 7) continue;
    console.log(i);
  }

  console.log('14. Stop at 15:');
  for (let i = 1; i <= 20; i++) {
    if (i === 15) break;
    console.log(i);
  }
}

// Section 4: Functions
{
  function greetUser(name) { return 'Hello, ' + name + '!'; }
  console.log('15.', greetUser('Radomir'));

  function calculateArea(width, height) { return width * height; }
  console.log('16.', calculateArea(5, 8));

  const calculateAreaArrow = (width, height) => width * height;
  console.log('17.', calculateAreaArrow(5, 8));

  function showMessage() { let localMessage = 'Hello!'; }
  showMessage();
  try { console.log(localMessage); }
  catch (error) { console.log('18.', error.name + ': ' + error.message); }
  // localMessage is only available inside showMessage.

  function power(base, exponent = 2) { return base ** exponent; }
  console.log('19.', power(4));
}

// Section 5: Arrays
{
  const colors = ['Red', 'Green', 'Blue'];
  console.log('20.', colors, colors[1]);

  colors.push('Yellow');
  console.log('21.', colors);

  const numbers = [2, 4, 6, 8, 10];
  console.log('22. Array iteration:');
  for (const number of numbers) console.log(number);

  let sum = 0;
  for (const number of numbers) sum += number;
  console.log('23.', sum);

  const data = [10, 25, 7, 40, 15];
  console.log('24.', Math.max(...data));

  const books = [
    { title: 'Book One', pages: 150 },
    { title: 'Book Two', pages: 200 }
  ];
  console.log('25.', books[1].title);
}

console.log('\n=== 7.2 ARRAY PROBLEMS ===');

// Easy (1–5)
function sumArray(numbers) {
  let sum = 0;
  for (const num of numbers) sum += num;
  return sum;
}

function maxInArray(numbers) {
  if (numbers.length === 0) return null;
  let max = numbers[0];
  for (const num of numbers) if (num > max) max = num;
  return max;
}

function countEvens(numbers) {
  let count = 0;
  for (const num of numbers) if (num % 2 === 0) count++;
  return count;
}

function reverseArray(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) result.push(arr[i]);
  return result;
}

function indexOfElement(arr, value) {
  for (let i = 0; i < arr.length; i++) if (arr[i] === value) return i;
  return -1;
}

// Medium (6–12)
function getPositiveNumbers(numbers) {
  return numbers.filter(num => num > 0);
}

function uniqueValues(arr) {
  return [...new Set(arr)];
}

function rotateRight(arr, k) {
  if (arr.length === 0) return [];
  const shift = ((k % arr.length) + arr.length) % arr.length;
  if (shift === 0) return [...arr];
  return arr.slice(-shift).concat(arr.slice(0, -shift));
}

function secondLargest(numbers) {
  const unique = [...new Set(numbers)];
  unique.sort((a, b) => b - a);
  return unique.length < 2 ? null : unique[1];
}

function mergeAndSort(a, b) {
  return [...a, ...b].sort((x, y) => x - y);
}

function wordLengths(words) {
  return words.map(word => word.length);
}

function isSortedAscending(numbers) {
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < numbers[i - 1]) return false;
  }
  return true;
}

// Hard (13–15)
function hasPairWithSum(numbers, target) {
  const seen = new Set();
  for (const num of numbers) {
    if (seen.has(target - num)) return true;
    seen.add(num);
  }
  return false;
}

function flattenOnce(arr) {
  const result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      for (const value of item) result.push(value);
    } else result.push(item);
  }
  return result;
}

function groupByParity(numbers) {
  const result = { even: [], odd: [] };
  for (const num of numbers) {
    if (num % 2 === 0) result.even.push(num);
    else result.odd.push(num);
  }
  return result;
}

// Tests, including empty arrays and other edge cases
const tests = [
  ['1. Sum', sumArray([1, 2, 3, 4]), sumArray([])],
  ['2. Maximum', maxInArray([3, 10, 5]), maxInArray([])],
  ['3. Count evens', countEvens([1, 2, 3, 4, 6]), countEvens([1, 3, 5])],
  ['4. Reverse', reverseArray([1, 2, 3]), reverseArray(['a', 'b'])],
  ['5. Index', indexOfElement(['a', 'b', 'c'], 'b'), indexOfElement([10, 20, 30], 5)],
  ['6. Positive', getPositiveNumbers([-3, 0, 2, 5, -1]), getPositiveNumbers([-1, -2])],
  ['7. Unique', uniqueValues([1, 2, 2, 3, 1]), uniqueValues(['a', 'a', 'b'])],
  ['8. Rotate', rotateRight([1, 2, 3, 4], 1), rotateRight([1, 2, 3, 4], 2), rotateRight([1, 2, 3], 0)],
  ['9. Second largest', secondLargest([10, 5, 20]), secondLargest([3, 3, 3]), secondLargest([1])],
  ['10. Merge & sort', mergeAndSort([3, 1], [4, 2]), mergeAndSort([], [5, 1])],
  ['11. Word lengths', wordLengths(['apple', 'hi', 'JS']), wordLengths([])],
  ['12. Sorted', isSortedAscending([1, 2, 2, 3]), isSortedAscending([3, 2, 1]), isSortedAscending([])],
  ['13. Two sum', hasPairWithSum([1, 2, 3, 9], 8), hasPairWithSum([1, 2, 4, 4], 8)],
  ['14. Flatten', flattenOnce([1, [2, 3], 4]), flattenOnce([[1, 2], [3], 4]), flattenOnce([1, 2, 3])],
  ['15. Parity', groupByParity([1, 2, 3, 4, 5])]
];

for (const [label, ...results] of tests) {
  console.log(label + ':', ...results);
}
