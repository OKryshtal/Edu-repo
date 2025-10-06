console.log('-------Array---------');

const arr = [];

arr.push('1');
arr.push(2);
arr.push(true);

console.log(arr, arr.length);
console.log(arr[0], arr[2]);

arr[1] = 'changed value';
console.log(arr, arr.length);

const element = arr.pop();
console.log(element, arr, arr.length);

arr.push(1);
arr.push({ a: 1, b: 2 });
arr.push(3);
arr.push(true);
arr.push('5');

console.log('-----------------');
const filteredArray = arr.filter((item) => typeof item === 'string');
const foundElement = arr.find((item) => typeof item === 'string');
console.log(filteredArray, foundElement);

console.log('-----------------');
const sortedArray = [1, 5, 3, 2, 7, 4, 0, 9].sort((a, b) => a - b);
console.log(sortedArray);

//reduce

console.log('---------Reduce--------');
const sum = [1, 2, 3, 4, 5].reduce((acc, item) => acc + item, 0);
console.log(sum);

console.log('======= STRING ARRAY =======');

const stringArray = ['apple', 'banana', 'cherry'];
console.log(stringArray, stringArray.length);

stringArray.push('orange');
stringArray[1] = 'blueberry';
console.log(stringArray);

stringArray.forEach((item, index) => console.log(`${index}: ${item}`));

const upperCaseArray = stringArray.map((item) => item.toUpperCase());
console.log('Uppercased:', upperCaseArray);

console.log('\n======= NUMBER ARRAY =======');

const numberArray = [5, 2, 8, 1, 4];
console.log(numberArray, numberArray.length);

numberArray.push(10);
numberArray[0] = 7;
console.log(numberArray);

const sortedNumbers = numberArray.sort((a, b) => a - b);
console.log('Sorted:', sortedNumbers);

const num = numberArray.reduce((acc, num) => acc + num, 0);
console.log('Sum:', num);

numberArray.forEach((num) => console.log(`Number: ${num}`));
const multiplied = numberArray.map((num) => num * 2);
console.log('Multiplied by 2:', multiplied);

console.log('\n======= BOOLEAN ARRAY =======');

const booleanArray = [true, false, true, true];
console.log(booleanArray, booleanArray.length);

booleanArray.push(false);
console.log(booleanArray);

const trueCount = booleanArray.filter((item) => item === true).length;
console.log('Number of true values:', trueCount);

booleanArray.forEach((item, index) => console.log(`${index}: ${item}`));
const inverted = booleanArray.map((item) => !item);
console.log('Inverted:', inverted);

console.log('\n======= ANY ARRAY =======');

const anyArray = ['text', 42, true, { a: 1 }, [1, 2, 3]];
console.log(anyArray, anyArray.length);

anyArray.push(null);
anyArray.push('new item');
console.log(anyArray);

const filteredStrings = anyArray.filter((item) => typeof item === 'string');
console.log('Strings only:', filteredStrings);

anyArray.forEach((item, index) => console.log(`${index}: ${item} (type: ${typeof item})`));

const mappedTypes = anyArray.map((item) => typeof item);
console.log('Mapped types:', mappedTypes);
