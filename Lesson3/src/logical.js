// ---------- Частина 1: порівняння та приведення типів ----------
let a = 1;
let b = '2';
let c = true;

console.log(a == b);
console.log(a == c);
console.log(a != b);
console.log(a != c);
console.log('- - - - з приведенням типів - - - - - ');
console.log(a === b);
console.log(a === c);
console.log(a !== b);
console.log(a !== c);

a = 2;
b = '3';
c = false;

console.log('- - - - порівняння з приведенням типів - - - - - ');
console.log(a > b);
console.log(a > c);
console.log(a < b);
console.log(a < c);
console.log(a >= b);
console.log(a >= c);
console.log(a <= b);
console.log(a <= c);

console.log('- - - - порівняння рядків - - - - - ');
a = 'str1';
b = 'str2';
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

// ---------- Частина 2: логічні оператори ----------
a = 3;
b = '5';
const d = undefined; // d може змінюватися

// logical AND (&&)
console.log(a > b && b >= 5);
console.log(a < b && b >= 5);

// logical OR (||)
console.log(a > b || b >= 5);
console.log(a < b || b >= 5);
console.log(a > b || b < 5);

// logical NOT (!)
console.log(!(a > b));
console.log(!(a < b));

// nullish coalescing (??)
c = d ?? 'other value';
console.log(c);
