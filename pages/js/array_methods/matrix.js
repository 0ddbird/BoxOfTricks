/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/


n = ['b o o b', 'o b o o', 'o b b o', 'b b b o']


// o à remplacer par le nombre de 'b' adjacents (haut, bas, gauche, droite, diagonales)
const n = parseInt(readline());
const arr = []
for (let i = 0; i < n; i++) {
    const line = readline();
    console.error(line.split(' '))
}

const result = []
for (let i = 0; i< arr.length ; i++) {

    let newArr = arr[i].map((char, index) => {
        if (char === 'b') return char
        else {
            let count
            if(arr[index -1] === 'b') count +=1
            if (arr[index +1] === 'b') counte +=1

            if(arr[i-1] !== null) {
                if(arr[i-1][i] ==='b') count +=1
                if(arr[i-1][i - 1] ==='b') count +=1
                if(arr[i-1][i + 1] ==='b') count +=1
            }

            if(arr[i+1] !== null) {
                if(arr[i+1][i] ==='b') count +=1
                if(arr[i+1][i - 1] ==='b') count +=1
                if(arr[i+1][i + 1] ==='b') count +=1
            }
            return count
        }
    })
    result.push(newArr)
}

console.error(result)
