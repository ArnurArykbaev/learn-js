/* 
    Использование "this" в литерале объекта
    важность: 5
    Здесь функция makeUser возвращает объект.

    Каким будет результат при обращении к свойству объекта ref? Почему?

    function makeUser() {
    return {
        name: "John",
        ref: this
    };
    }

    let user = makeUser();

    alert( user.ref.name );
*/

// Ошибка, т.к. у makeUser агрумент пустой и this ссылается на этот аргумент

/* 
    Создайте калькулятор
    важность: 5
    Создайте объект calculator (калькулятор) с тремя методами:

    read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
    sum() (суммировать) возвращает сумму сохранённых значений.
    mul() (умножить) перемножает сохранённые значения и возвращает результат.
    let calculator = {
    // ... ваш код ...
    };

    calculator.read();
    alert( calculator.sum() );
    alert( calculator.mul() );
*/

// let calculator = {
//     read(fistValue, secondValue) {
//         this.fistValue = fistValue;
//         this.secondValue = secondValue
//     },
//     sum(fistValue, secondValue) {
//         return fistValue + secondValue;
//     },
//     mul(fistValue, secondValue) {
//         return fistValue * secondValue;
//     }
// }

/* 
    Цепь вызовов
    важность: 2
    У нас есть объект ladder (лестница), который позволяет подниматься 
    и спускаться:

    let ladder = {
    step: 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    showStep: function() { // показывает текущую ступеньку
        alert( this.step );
    }
    };
    Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:

    ladder.up();
    ladder.up();
    ladder.down();
    ladder.showStep(); // 1
    ladder.down();
    ladder.showStep(); // 0
    Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

    ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
*/

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     alert(this.step);
//     return this;
//   },
// };
