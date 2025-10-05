console.log('-------Set---------');
const set = new Set();
set.add(1);
set.add('2');
set.has(3) ? set.delete(3) : set.add(3);
const entries = set.entries();
console.log(entries, Array.from(entries));
//get set values
const values = set.values();
console.log(values, Array.from(values));

const arr = [1, 2, 3, 1, 3, 5, 7, 2];
const set2 = new Set(arr);
console.log(Array.from(set2.values()));

console.log('-------Map---------');
const map = new Map();
map.set('1', 1);
//map.delete('1');
map.set('1', '1');
map.set(2, '2');
map.set(3, { a: 1, b: 2 });
map.has('4') ? map.delete('4') : map.set('4', { a: 1 });
[{ 1: 'datetime2' }, { 2: '2' }, { 3: { a: 1, b: 2 } }]; //('1': "datetime1")
if (map.has('3')) {
    //логіка перевірки таймстемпа і перезапису свіжішого
}
//const mapEntries = map.entries();
const someValue = map.get('1');
console.log(someValue);
const keys = Array.from(map.keys());
console.log(keys, map.keys()); // [ '1', 2, '3' ] [Map Iterator] { '1', 2, '3' }
