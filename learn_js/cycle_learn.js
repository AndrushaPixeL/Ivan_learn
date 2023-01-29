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