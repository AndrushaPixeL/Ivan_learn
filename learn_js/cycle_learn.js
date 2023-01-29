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

// функция, которая возвращает процент числа value от значения total

console.log(lol())

let value = 4;
let total = 80;
function getPercent(value, total) {
    let res = value * 100 / total;
    return res;
}
console.log(getPercent(value, total));