/* eslint linebreak-style: ["error", "windows"] */
/**
 * Реализовать функцию, поведение которой аналогично поведению Promise.all,
 * которая возвращает в качестве результата rejected промис c первым reject value или resolve с массивом resolveValues,
 * в соответствущих исходному массиву промисов позициях, если не было ни одного промиса с reject.
 * @param {Array<Promise>} promises - массив с исходными промисами
 * @return {Promise}
 */
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const resolveValues = [];
    let countPromiseCompleted = 0;

    promises.forEach((promise, i) => {
      promise
        .then(value => {
          resolveValues[i] = value;
          if (++countPromiseCompleted === promises.length) {
            resolve(resolveValues);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  });
}

module.exports = promiseAll;
