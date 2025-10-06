const obj = {};

obj.key1 = 'val1';
obj['key2'] = 'val2';
obj['key3 with space'] = 'val3 with spaces';
obj.key4 = {
    subKey1: 1,
    subKey2: '2',
    subKey3: true,
    subKey4: []
};

console.log(obj);
console.log(JSON.stringify(obj));

const wantedCopy = obj;
wantedCopy.key1 = 1;
console.log(obj, wantedCopy);

const singleLevelCopy = { ...obj };
singleLevelCopy.key2 = 'changed value in copied object';
singleLevelCopy.key4.subKey1 = 'changed nested object property';
console.log('----- single level copy------');
console.log(obj, singleLevelCopy);

const deepCopy = structuredClone(obj);
const deepCopyWithDoubleConversion = JSON.parse(JSON.stringify(obj));
deepCopy.key4.subKey3 = 'changed nested prop for deep copy demo';
deepCopyWithDoubleConversion.key4.subKey3 = 'changed nested prop for deep copy with double conversion demo';
console.log('----- deep copy------');
console.log(obj, deepCopy, deepCopyWithDoubleConversion);

console.log('common used object methods');
const objKeys = Object.keys(obj);
const objValues = Object.values(obj);
const objEntries = Object.entries(obj);
console.log(objKeys, objValues, objEntries);

console.log(Object.keys(obj.key4));

const objWithMethod = structuredClone(obj);
objWithMethod.objMethod = function () {
    console.log('objMethod');
    console.log(this);
    console.log(this.key1);
};

objWithMethod.objMethod();

//object constructor
function objectConstructor(name, prop) {
    this.name = name;
    this.prop = prop;
}
const objFromConstructor = new objectConstructor('name', { key: 'value' });
console.log(objFromConstructor);

console.log('---------Створення обєкта-користувача---------');
const user = {
    name: 'Olga',
    age: 28,
    hobbies: ['reading', 'coding', 'traveling'], // масив
    address: {
        city: 'Kyiv',
        street: 'Hrushevskoho 10',
        postalCode: '01001'
    },
    showInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`City: ${this.address.city}`);
        console.log(`Hobbies: ${this.hobbies.join(', ')}`);
    }
};

// Метод, щоб побачити інформацію
user.showInfo();
