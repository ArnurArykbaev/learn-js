/* 
    Что не так с этим тестом?
    важность: 5
    Что не так в нижеприведённом тесте функции pow?

    it("Возводит x в степень n", function() {
    let x = 5;

    let result = x;
    assert.equal(pow(x, 1), result);

    result *= x;
    assert.equal(pow(x, 2), result);

    result *= x;
    assert.equal(pow(x, 3), result);
    });
    P.S. Тест не содержит синтаксических ошибок и успешно проходит.
*/

// Все ок, тест сложно читаем

// Нужно разбить на три разных теста