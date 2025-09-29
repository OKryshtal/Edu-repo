// IF (перевірка 1) {
// дія 1
// else if (перевірка 2) {
// дія 2
// } else {
// дія 3
// }
// перевірка на повне співпадіння типу === ʼзначенняʼ

const a = 5;

console.log('----- Виконання конструкції switch-case --------');

switch (a) {
    case 1:
        console.log('a = 1');
        break;
    case 2:
        console.log('a = 2');
        break;
    case 3:
        console.log('a = 3');
        break;
    case 4:
        console.log('a = 4');
        break;
    case 5:
        console.log('a = 5 — це наш випадок!');
        break;
    default:
        console.log('a має значення поза очікуваним діапазоном');
}

const day = 3; // 1 = Понеділок, 2 = Вівторок, 3 = Середа ...

console.log('----- Виконання конструкції switch-case --------');

switch (day) {
    case 1:
        console.log('Сьогодні понеділок');
        break;
    case 2:
        console.log('Сьогодні вівторок');
        break;
    case 3:
        console.log('Сьогодні середа');
        break;
    case 4:
        console.log('Сьогодні четвер');
        break;
    case 5:
        console.log('Сьогодні пʼятниця');
        break;
    case 6:
    case 7:
        console.log('Вихідні!');
        break;
    default:
        console.log('Некоректний номер дня');
}
