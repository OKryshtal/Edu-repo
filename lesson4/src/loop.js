for (let i = 0; i < 10; i++) {
    if (i === 2) {
        continue;
    }
    console.log(i);
    if (i === 7) {
        break;
    }
}

console.log('--------------------');
const arr = [1, true, 3, 4, 5, 6, { a: 1, b: 2 }, 8, '9', 10];
for (const value of arr) {
    if (value < 3) {
        console.log('skipped index,  ', arr.indexOf(value));
        continue;
    } else if (value > 7) {
        break;
    }
    console.log(value);
}

console.log('--------------------');
console.log(arr.indexOf('9'), arr.indexOf(15), arr.includes(1));

console.log('--------------------');
let Iterator = 0;
while (Iterator < 10) {
    if (Iterator === 2) {
        Iterator++;
        continue;
    } else if (Iterator === 7) {
        break;
    }
    console.log(Iterator);
    Iterator++;
}

console.log('--------------------');

const outerObject = [];
arr.forEach((value, index) => {
    if (index < 5) {
        return;
    }
    outerObject.push(value);
    console.log(value);
});
console.log(outerObject);

console.log('----------Map----------');
const map = arr
    .map((value, index) => {
        if (index >= 5) {
            return value;
        }
    })
    .filter((value) => value);
console.log(map);

console.log('---------- FOR: 0 → 9 ----------');
for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('---------- WHILE: 0 → 9 ----------');
let j = 0;
while (j < 10) {
    console.log(j);
    j++;
}

console.log('---------- DO...WHILE: 0 → 9 ----------');
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 10);

console.log('---------- FOR: 100 → 0 (step -10) ----------');
for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}

console.log('---------- WHILE: 100 → 0 (step -10) ----------');
let m = 100;
while (m >= 0) {
    console.log(m);
    m -= 10;
}

console.log('---------- DO...WHILE: 100 → 0 (step -10) ----------');
let n = 100;
do {
    console.log(n);
    n -= 10;
} while (n >= 0);
