import {domDisplay} from '../utils/utils.js'

const array = [1, 5, 6]
const sumArr = array.reduce((acc, value) => acc + value, 0)
// console.log(array, sumArr)

const objArray = [
  {
    name: 'a',
    value: 1
  },
  {
    name: 'b',
    value: 1
  },
  {
    name: 'a',
    value: 2
  },
  {
    name: 'b',
    value: 3
  },
  {
    name: 'c',
    value: 5
  }
]

domDisplay(objArray)


const sumObjArr = objArray.reduce((acc, object) => (
  { 
    ...acc, 
    [object.name]: { 
      ...object, 
      value: object.value + (acc[object.name]?.value ?? 0)
    } 
  }
  ), {})

domDisplay(sumObjArr, 'reduce')
const sumObjArr2 = objArray.reduce((acc, object) => (
  {
    ...acc,
    [object.name]: {
      ...object,
      value: object.value + (acc[object.name]?.quantity ?? 0)
    }
  }
), {})
domDisplay(sumObjArr2, 'reduce')

const testArr = [1, 2, 3]

const reducedArr = testArr.reduce((acc, val) => (
  acc += val * acc
  ), 1)


domDisplay(reducedArr)

const obj = {
  x: 10,
  y: 12,
  sum: () => { 
    return this.x + this.y
  },
  multiply: function () {
    return this.x * this.y
  },
  test: () => {
    return 'a'
  },
  test2: () => 'b',
  retXArrow: () => {
    return this.x
  },
  retXDefaultSyntax: function () {
    return this.x
  }
}

function execute() {
  // domDisplay(obj.sum())        // NaN
  domDisplay(obj.multiply(), 'objectMethod')   //120
  domDisplay(obj.test(), 'objectMethod')       // 'a'
  domDisplay(obj.test2(), 'objectMethod')      //'b'
  //console.log(obj.retXArrow())  // undefined
  //console.log(obj.retXDefaultSyntax())  // 10
}

execute()

function add(x = 5, y = 3) {
  return x + y
}

domDisplay('Add function with placeholder values', 'placeholder')
domDisplay(add.toString(), 'placeholder')
domDisplay(add(5), 'placeholder')

/* console.log(add(null, null))
console.log(null == 0)
console.log(Math.abs(null))
console.log(typeof null)
console.log(Object.getOwnPropertyNames(null)) */

/* function factorial(n) {
  if (n === 0) return 1
  else {
    const arr = [...Array(n+1).keys()]
    arr.splice(0,1)
    const result = arr.reduce((acc, val) => acc * val, 1)
    return result
  }
} */

function factorial(n) {
  if (n < 0) return -1;
  else if (n === 0) return 1;
  else return n * factorial(n - 1);
}


domDisplay('recursive Factorial of 5', 'factorial')
domDisplay(factorial.toString(), 'factorial', true)
domDisplay(factorial(5), 'factorial')

function sumRangedValue(array, n1, n2) {
  return array
  .slice(n1, n2 + 1)
  .reduce((acc, val) => acc + val)
}

domDisplay('Sum numbers of an array between index x and index y', 'rangedSum')
domDisplay(sumRangedValue([1, 2, 4, 8, 12, 3, 8, 40, 19], 2, 5), 'rangedSum')
/* 
console.log(calc([1,3,5,3], 1, 3)) // 11
console.log(calc([1,3,5,2], 0, 2)) // 9
console.log(calc([1,2,1], 0, 0)) // 1
console.log(calc([1,3,5,2], 0, 3)) // 11
console.log(calc([7,1,3,5,2,7], 0, 2)) // 11
console.log(calc([1], 0, 0))
 */

function convertToIntegers(stringArr) {
  if (!Array.isArray(stringArr) || stringArr.length === 0) return -1
  if (stringArr.some(value => isNaN(parseInt(value)))) return -1
  else return stringArr.map(string => parseInt(string))

}

domDisplay('Convert string formatted numbers from an array to integers')
domDisplay(`['1', '4', '8'] ${convertToIntegers(['1', '4', '8'])}`, 'convertToIntegers')
domDisplay(`[' ', '1', '3'] ${convertToIntegers([' ', '1', '3'])}`, 'convertToIntegers')
domDisplay(`null ${convertToIntegers(null)}`, 'convertToIntegers')
domDisplay(`empty array ${convertToIntegers([])}`, 'convertToIntegers')

function a(i, j) {
  if (i === 1 || j === 1 || i + j === 1) return true
  return false
}


/* const map = {};
const names = [];
const n: number = parseInt(readline());
for (let i = 0; i < n; i++) {
    const person: string = readline();
    const [name, sport] = person.split(' - ');
    if (names.includes(name)) {
        continue
    }
    if (map[sport]) {
        map[sport] += 1;
    } else {
        map[sport] = 1;
    }
    names.push(name);
}

let bestSportName = [];
let bestSportScore = 0;

for (const [sport, value] of Object.entries(map)) {
    if (value > bestSportScore) {
        bestSportScore = value as number;
        bestSportName = [sport];
    } else if (value === bestSportScore) {
        bestSportName.push(sport);
    }
}
console.log(bestSportName.sort().join(' '))



const N = parseInt(readline());
const t = []
for (let i = 0; i < N; i++) {
    const S = readline();
    [...S].forEach((m,j) => {
        t[j] = (t[j] || '') + m
    })
}
console.error(t)

const k = t[0].length

const M = parseInt(readline());
var inputs = readline().split(' ');
for (let i = 0; i < M; i++) {
    const H = parseInt(inputs[i]);
    t.push('#'.repeat(H).padStart(k,'.'))
}
const v = []

t.forEach(m => {
    [...m].forEach((l,i) => {
        v[i] = (v[i] || '') + l
    })
})

v.forEach(m => console.log(m))
 */