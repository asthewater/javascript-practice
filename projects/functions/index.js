/* ДЗ 1 - Функции */

/*
 Задание 1:

 1.1: Добавьте к функции параметр с любым именем
 1.2: Функция должна возвращать аргумент, переданный в параметре

 Пример:
   returnFirstArgument(10) вернет 10
   returnFirstArgument('привет') вернет `привет`

 Другими словами: функция должна возвращать в неизменном виде то, что поступает ей на вход
 */
 function returnFirstArgument(a) {
  return a;
}
a = ('Hello');
  const result = returnFirstArgument(a);

/*
 Задание 2:

 2.1: Функция должна возвращать сумму переданных аргументов

 Пример:
   sumWithDefaults(10, 20) вернет 30
   sumWithDefaults(2, 4) вернет 6

 2.2 *: Значение по умолчанию для второго аргумента должно быть равно 100

 Пример:
   sumWithDefaults(10) вернет 110
 */

//  2.1
function sumWithDefaults(a, b) {
  return a + b;
}
sumWithDefaults(a = 10, b = 20);
const sum = sumWithDefaults (a = 10, b = 20);

// 2.2
function sumWithDefaults(c) {
  function foo (d) {
    return c + d;
  }
  return foo;
}
const foo = sumWithDefaults(c = 100);

/*
 Задание 3:

 Функция должна принимать другую функцию и возвращать результат вызова этой функции

 Пример:
   returnFnResult(() => 'привет') вернет 'привет'
 */
function returnFnResult(fn2) {
  return fn2;
}
const fn2Result = returnFnResult(function fn2() {
  return 'результат вызова функции';
});

/*
 Задание 4:

 Функция должна принимать число и возвращать новую функцию (F)
 При вызове функции F, переданное ранее число должно быть увеличено на единицу и возвращено из F

 Пример:
   var f = returnCounter(10);

   console.log(f()); // выведет 11
   console.log(f()); // выведет 12
   console.log(f()); // выведет 13
 */
function returnCounter() {
  let y = 0;

  function f () {
    y = y + 1;
    return y;
  }
  return f;
}
 const counter = returnCounter();
/*
 Задание 5 *:

 Функция должна возвращать все переданные ей аргументы в виде массива
 Количество переданных аргументов заранее неизвестно

 Пример:
   returnArgumentsArray(1, 2, 3) вернет [1, 2, 3]
 */
  function returnArgumentsArray(...numbers) {
    let result = [0];
    for (let i = 0; i < numbers.length; i++) {
        result[i] = numbers[i];
    }
    return result;
  }


export {
  returnFirstArgument,
  sumWithDefaults,
  returnArgumentsArray,
  returnFnResult,
  returnCounter,
};
