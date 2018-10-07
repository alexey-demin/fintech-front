/* eslint linebreak-style: ["error", "windows"] */
/* =============================
=            РЕЛИЗ            =
============================= */

/**
 * Исправьте проблему с таймером: должны выводиться числа от 0 до 9.
 * Доп. задание: предложите несколько вариантов решения.
 */
function timer(logger = console.log) {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      logger(i);
    }, 100);
  }
}

// function timer(logger = console.log) {
//   for(var i = 0; i < 10; i++){
//     (function(i) {
//           setTimeout(function(){
//             logger(i);
//           }, 100);
//     })(i);
//   }
// }

// function timer(logger = console.log) {
//   for (var i = 0; i < 10; i++) {
//     const x = i;
//     setTimeout(() => {
//       logger(x);
//     }, 100);
//   }
// }

/*= ============================================ */

/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind(func, context, ...args) {
  return function bind(...argumets) {
    return func.apply(context, [].concat(args, Array.from(argumets)));
  };
}

/*= ============================================ */

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */

function sum(x) {
  if (arguments.length === 0) { return 0; }
  let currentSum = x;

  function b(a) {
    if (a === undefined) {
      return currentSum;
    }
    currentSum += a;
    return b;
  }

  return b;
}

/*= ============================================ */

/**
 * Определите, являются ли строчки анаграммами (например, “просветитель” — “терпеливость”).
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
function anagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const firstString = first.toLowerCase().split('').sort().join('');
  const secondString = second.toLowerCase().split('').sort().join('');

  return firstString === secondString;
}

/*= ============================================ */

/**
 * Сократите массив до набора уникальных значений
 * [1,1, 2, 6, 3, 6, 2] → [1, 2, 3, 6]
 * @param {Array<number>} исходный массив
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getUnique(arr) {
  const uniqueElements = {};

  for (let i = 0; i < arr.length; i++) {
    uniqueElements[arr[i]] = '';
  }
  return Object.keys(uniqueElements).sort((a, b) => a - b);
}

/**
 * Найдите пересечение двух массивов
 * [1, 3, 5, 7, 9] и [1, 2, 3, 4] → [1, 3]
 * @param {Array<number>, Array<number>} first, second исходные массивы
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getIntersection(first, second) {
  return first.length < second.length ?
    getUnique(first.filter(elemet => second.indexOf(elemet) !== -1)) :
    getUnique(second.filter(elemet => first.indexOf(elemet) !== -1));
}

/* ============================================= */

/**
 * Две строки называются изоморфными, когда в строке A можно заменить
 * конкретный символ на любой другой для получения строки B. (Расстояние Левенштейна, при возможных мутациях
 * ограничивающихся заменой символа - отличается на 1).
 * Отдельно стоит отметить что строка изоморфна самой себе.
 * Порядок символов должен остаться неизменным. Каждый
 * последовательный символ в строке A сравнивается с
 * каждым последовательным символов в строке B.
 *
 * @param  {string} left
 * @param  {string} right
 * @return {boolean}
 */
function isIsomorphic(left, right) {
  if (left.length !== right.length) {
    return false;
  }

  let differences = 0;

  for (let i = 0; i < left.length; i++) {
    if (left[i] !== right[i] && ++differences > 1) {
      return false;
    }
  }
  return true;
}

module.exports = {
  timer,
  customBind,
  sum,
  anagram,
  getUnique,
  getIntersection,
  isIsomorphic
};
