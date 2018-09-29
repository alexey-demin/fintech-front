/*=============================
=            РЕЛИЗ            =
=============================*/

/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(string) {
  const array = string.match(/-?\d+(\.\d+)?/g)
  return {
    max: Math.max.apply(Math, array),
    min: Math.min.apply(Math, array)
  }
}

/* ============================================= */

/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciSimple(x) {
  return x <= 1 ? x : fibonacciSimple(x - 1) + fibonacciSimple(x - 2);
}

/* ============================================= */

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
let results = [0, 1];
function fibonacciWithCache(x) {
  if (!results[x]) {
    results[x] = fibonacciSimple(x - 1) + fibonacciSimple(x - 2);
  }
  return results[x];
}

/* ============================================= */

/**
 * Напишите функцию printNumbers, выводящую числа в столбцах
 * так, чтобы было заполнено максимальное число столбцов при
 * минимальном числе строк.
 * Разделитель межу числами в строке - один пробел,
 * на каждое число при печати - отводится 2 символа
 * Пример работы: printNumbers(11, 3)
 *  0  4  8
 *  1  5  9
 *  2  6 10
 *  3  7 11
 * @param  {number} max  максимальное число (до 99)
 * @param  {number} cols количество столбцов
 * @return {string}
 */
function printNumbers(max, cols) {
  let resultMatrix = '';
  const rowCount = parseInt((max + 1) / cols);
  
  if (rowCount <= 1){
    resultMatrix += ' 0';
    for (let i = 1; i <= max; i++){
      resultMatrix += i < 10 ? `  ${i}` : ` ${i}`;
    }
  }
  else {
    resultMatrix += ' 0';
    for (let i = 1; i < cols; i++){
      const number = i * rowCount
      resultMatrix += number < 10 ? `  ${number}` : ` ${number}`;
    }
    for (let i = 1; i < rowCount; i++){
      if (i > max) break;
      resultMatrix += '\n';
      resultMatrix += i < 10 ? ` ${i}`: i;
      for (let j = 1; j < cols; j++){
        const number = i + rowCount * j
        if (number > max) break;
        resultMatrix += number < 10 ? `  ${number}` : ` ${number}`;
      }
    }
  }
  return resultMatrix;
}

/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */
function rle(input) {
  if (input.length <= 1) return input; 
  let encoding = '';
  let repeats = 1;
  let index = 1;
  for (; index < input.length - 1; index++) {
    if (input[index] === input[index-1]) {
      repeats++;
    }
    else {
      encoding += repeats === 1 ? input[index-1] : `${input[index-1]}${repeats}`;
      repeats = 1;
    }
  }

  if (input[index] === input[index - 1]){
    encoding += `${input[index]}${++repeats}`;
  }
  else {
    encoding += repeats === 1 ? input[index - 1] : `${input[index - 1]}${repeats}`;
    encoding += input[index];
  }
  return encoding;
}

module.exports = {
  getMinMax,
  rle,
  printNumbers,
  fibonacciSimple,
  fibonacciWithCache
};

/*=====  End of РЕЛИЗ  ======*/

/*========================================
=            НЕ ВОШЛО В РЕЛИЗ            =
========================================*/

/**
 * Игра "угадайка". Компьютер загадывает случайное целое число от 1 до 100,
 * пользователь вводит числа в консоль.
 * На каждое число компьютер отвечает "слишком мало", "слишком много", "в точку!".
 * Для общения с пользователем используйте window.prompt.
 */

/**
 * Игра продолжается, пока пользователь не угадает. После этого выводит в консоль результат.
 */
function guessNumberA() {}

/**
 * По завершению игры пользователю предлагается сыграть еще раз. После каждого тура выводится последний и лучший результаты.
 */
function guessNumberB() {}

/*=====  End of НЕ ВОШЛО В РЕЛИЗ  ======*/
