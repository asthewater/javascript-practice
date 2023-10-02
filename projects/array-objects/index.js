/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами.
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   forEach([1, 2, 3], (el) => console.log(el)); // выведет каждый элемент массива
 */

  //  встроенный метод forEach()

const a = [1, 2, 'hello', 4, 5];
a.forEach((elems) => {
  console.log(elems);
});


// аналог метода forEach()

const a = [1, 2, 'hello', 4, 5];
for (const el of a) {
  console.log(el);
};

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами.
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   const newArray = map([1, 2, 3], (el) => el ** 2);
   console.log(newArray); // выведет [1, 4, 9]
 */

 // встроенный метод map()

 const array = [2, 4, 6,];
 let newArray = array.map((array2) => array2 ** 2)
   
 console.log(newArray);

// аналог метода map()

const b = [2, 4, 6,];
let c = [];
for (let i = 0; i < b.length; i++) {
  c[i] = b[i] ** 2;
};
 console.log(c);
/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами.
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   const sum = reduce([1, 2, 3], (all, current) => all + current);
   console.log(sum); // выведет 6
 */

// встроенный метод reduce()

const num = [1, 3, 4];
let sum = num.reduce((sum, mun) {
  return sum + num;
});
console.log(sum);

// аналог метода reduce()

const num = [4, 5, 1];
let sum = 0;
for (let i = 0; i < num.length; i++) {
  sum += num[i];
}
console.log(sum);

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   const keys = upperProps({ name: 'Сергей', lastName: 'Петров' });
   console.log(keys) // выведет ['NAME', 'LASTNAME']
 */
function upperProps() {}

const person = {
  name: 'Sara',
  lastName: 'Smith'
};
 
for (const key of Object.keys(person)) {
  console.log ([key.toUpperCase()]);
};
 

export { forEach, map, reduce, upperProps };
