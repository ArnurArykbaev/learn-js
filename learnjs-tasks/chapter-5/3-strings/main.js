/* 
    Сделать первый символ заглавным
    важность: 5
    Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

    ucFirst("вася") == "Вася";
*/

// const ucFirst = (str) => {
//   const fistLetter = str[0].toUpperCase();
//   return fistLetter + str.slice(1);
// };


/* 
    Проверка на спам
    важность: 5
    Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

    Функция должна быть нечувствительна к регистру:

    checkSpam('buy ViAgRA now') == true
    checkSpam('free xxxxx') == true
    checkSpam("innocent rabbit") == false
*/

// const checkSpam = (str)  => {
//   let lowerStr = str.toLowerCase();

//   return lowerStr.includes('viagra') || lowerStr.includes('xxx');
// }

/* 
    Выделить число
    важность: 4
    Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

    Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

    Например:

    alert( extractCurrencyValue('$120') === 120 ); // true
*/

// const extractCurrencyValue = (str) => number(str.slice(1));