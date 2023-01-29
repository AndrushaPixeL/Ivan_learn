const num = 2;

function lol() {
    let res = [];
    let numb = num;

    for (let i = 0; i < 3; i++) {
        numb = numb * numb
        res.push(numb)
    }

    return res.join(' ');
}

console.log(lol())

const value = 4;
const total = 80;
function getPercent(num1, num2) {
    let res = num1 * 100 / num2;
    return res;
}
console.log(getPercent(value, total));

// функция, которая возвращает процент числа value от значения total