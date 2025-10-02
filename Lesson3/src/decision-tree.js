console.log('General');

const a = 1;
const b = 2;
const c = '6';

if (a > b) {
    console.log('a > b');
} else if (a < b) {
    console.log('a < b');
} else {
    console.log('a === b');
}
if (a > b && c == 6) {
    console.log('a > b && c == 6');
} else if (a < b && c == 6) {
    console.log('a > b && c == 6');
}
if (a > b || c == 7) {
    console.log('a > b && c == 6');
} else if (a < b && typeof c == 'number') {
    console.log('a < b && typeof c == 6');
} else {
    console.log('none of the conditions above mentioned');
}

console.log('----- Виконання конструкції--------');
if (a < b) {
    console.log('виконання першого тру виразу');
} else if (typeof a === 'number') {
    console.log('виконання другого тру виразу');
} else {
    console.log('виконання дефолтної логіки з else');
}

console.log('-----Скорочений запис IF-ELSE---------');
const d = typeof c === 'number' ? c : Number(c);
console.log(d, typeof d);

console.log('Adult');
const age = 20;

if (age >= 18 && age < 60) {
    console.log('Ви достатньо дорослий, доступ дозволено ✅');
}

console.log('Examination');
const score = 91;

if (score >= 90) {
    console.log('Оцінка: A 🏆');
} else if (score >= 75 && score < 90) {
    console.log('Оцінка: B 👍');
} else if (score >= 60 || score === 59) {
    console.log('Оцінка: C 🙂');
} else {
    console.log('Не склав ❌');
}
