// callBack_learn
const multiplication = (testNum) => {
  const res = testNum * testNum
  return res
}

const addition = (testNum) => {
  const res = testNum + testNum
  return res
}

const newFunc = (num, onUmnozh, onPlus) => {
  const multi = onUmnozh(num)
  const add = onPlus(num)
  return multi + add
}

// callback, функция сразу описана в аргументе
const res1 = newFunc(
  10,
  (asd) => { return asd * asd},
  addition
)

// callback, функция ссылается на функцию multiplication
const res2 = newFunc(
  10,
  multiplication,
  addition
)

// callback, функция сразу описана в аргументе и возвращает результат функции multiplication
const res3 = newFunc(
  10,
  (asd) => { return multiplication(asd)},
  addition
)

// callback, функция ссылается на фукцию callBack, которая в своб очередь возвращает результат функции multiplication
const res4 = newFunc(
  10,
  callBack,
  addition
)
function callBack(num) {
  return multiplication(num) 
}

console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)
