/* eslint linebreak-style: ["error", "windows"] */
/**
* Сделать функцию, которая reject'ит возвращаемый промис, передавая в качестве ошибки строку 'timeout_error',
* если он не resolve'ится за указанный timeout, или ведет себя эквивалентно исходному.
* В учебных целях для этой задачи просьба не использовать Promise.race.
*
* @param {Promise} promise исходный промис
* @param {Number} timeoutInMilliseconds время для timeout в миллисекундах
* @return {Promise} промис с нужным поведением
*/
function rejectOnTimeout(promise, timeoutInMilliseconds) {
  return new Promise((resolve, reject) => {
    const rejectByTimeout = setTimeout(() => reject('timeout_error'), timeoutInMilliseconds);

    promise
      .then(value => {
        clearTimeout(rejectByTimeout);
        resolve(value);
      })
      .catch(error => {
        clearTimeout(rejectByTimeout);
        reject(error);
      });
  });
}

module.exports = rejectOnTimeout;
