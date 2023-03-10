/* 
    Что выведет alert (ИЛИ)?
    важность: 5
    Что выведет код ниже?

    alert( null || 2 || undefined );
*/

// null == false;
// 2 == true;

/* 
    Что выведет alert (ИЛИ)?
    важность: 3
    Что выведет код ниже?

    alert( alert(1) || 2 || alert(3) );
*/

// 1
// 2

/* 
    Что выведет alert (И)?
    важность: 5
    Что выведет код ниже?

    alert( 1 && null && 2 );
*/

// null

/* 
    Что выведет alert (И)?
    важность: 3
    Что выведет код ниже?

    alert( alert(1) && alert(2) );
*/

// 1
// undefinde

/* 
    Что выведет этот код?
    важность: 5
    Что выведет код ниже?

    alert( null || 2 && 3 || 4 );
*/

//    3

/* 
    Проверка значения из диапазона
    важность: 3
    Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

    «Включительно» означает, что значение переменной age может быть равно 14 или 90.
*/

// if(14 <= age <= 90) {
//     //
// }

/* 
    Проверка значения вне диапазона
    важность: 3
    Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

    Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.
*/

// let condition = 14 <= age <= 90;
// if(!condition) {
//     //
// }

// let condition = age > 90 || age < 14;
// if(condition) {
//     //
// }

/* 
    Вопрос об "if"
    важность: 5
    Какие из перечисленных ниже alert выполнятся?

    Какие конкретно значения будут результатами выражений в условиях if(...)?
*/

// if (-1 || 0) alert( 'first' ); // true
// if (-1 && 0) alert( 'second' ); // false
// if (null || -1 && 1) alert( 'third' ); // true

/* 
    Проверка логина
    Напишите код, который будет спрашивать логин с помощью prompt.

    Если посетитель вводит «Админ», то prompt запрашивает пароль, 
    если ничего не введено или нажата клавиша Esc – показать «Отменено», 
    в противном случае отобразить «Я вас не знаю».

    Пароль проверять так:

    Если введён пароль «Я главный», то выводить «Здравствуйте!»,
    Иначе – «Неверный пароль»,
    При отмене – «Отменено».
*/

let userLogin = prompt("Please, type your login", "");

if (userLogin === "Админ") {
  let userPassword = prompt("Type your password", "");

  if (userPassword === "Я главный") {
    alert("Greeting");
  } else if (userPassword === null || userPassword === "") {
    alert("Cancelled");
  } else {
    alert("Password is incorrect");
  }
} else if (userLogin === null || userLogin === "") {
    alert("Cancelled");
} else {
    alert("Password is incorrect");
}
