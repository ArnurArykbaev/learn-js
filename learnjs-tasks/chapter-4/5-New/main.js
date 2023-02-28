/* 
    Две функции - один объект
    важность: 2
    Возможно ли создать функции A и B, чтобы new A() == new B()?

    function A() { ... }
    function B() { ... }

    let a = new A();
    let b = new B();

    alert( a == b ); // true
    Если да – приведите пример вашего кода.
*/

// function parent() { return 1 }
// function A() { return parent }
// function B() { return parent }
// let a = new A();
// let b = new B();


/* 
    Создайте калькулятор при помощи конструктора, new Calculator
    важность: 5
    Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

    read() запрашивает два значения при помощи prompt и сохраняет их значение 
    в свойствах объекта.
    sum() возвращает сумму этих свойств.
    mul() возвращает произведение этих свойств.
    Например:

    let calculator = new Calculator();
    calculator.read();

    alert( "Sum=" + calculator.sum() );
    alert( "Mul=" + calculator.mul() );
*/

// function Calculator() {
//     this.read = () => {
//         let firstValue = prompt("firstValue", "");
//         let secondValue = prompt("secondValue", "");
//         this.firstValue = firstValue;
//         this.secondValue = secondValue;
//     } 
//     this.sum = () => this.firstValue + this.secondValue;
//     this.mul  = () => this.firstValue * this.secondValue;
// }


/* 
    Создайте new Accumulator
    важность: 5
    Создайте функцию-конструктор Accumulator(startingValue).

    Объект, который она создаёт, должен уметь следующее:

    Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
    Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
    Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

    Ниже вы можете посмотреть работу кода:

    let accumulator = new Accumulator(1); // начальное значение 1

    accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
    accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

    alert(accumulator.value); // выведет сумму этих значений
*/

// function Accumulator(currentValue) {
//     this.value = currentValue;
    
//     this.read = () => {
//         let newValue = prompt("New value", 0);
//         this.value += newValue;
//     }
// }