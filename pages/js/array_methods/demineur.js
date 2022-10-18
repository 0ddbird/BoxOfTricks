// o à remplacer par le nombre de 'z' adjacents (haut, bas, gauche, droite, diagonales)
const n = ['z o o z', 'o z o o', 'o z z o', 'z z z o']
const arr = []
const result = []

for (let i = 0; i< arr.length ; i++) {
    let newArr = arr[i].map((char, index) => {
        if (char === 'z') return char
        else {
            let count
            if(arr[index -1] === 'z') count +=1
            if (arr[index +1] === 'z') count +=1

            if(arr[i-1] !== null) {
                if(arr[i-1][i] ==='z') count +=1
                if(arr[i-1][i - 1] ==='z') count +=1
                if(arr[i-1][i + 1] ==='z') count +=1
            }

            if(arr[i+1] !== null) {
                if(arr[i+1][i] ==='z') count +=1
                if(arr[i+1][i - 1] ==='z') count +=1
                if(arr[i+1][i + 1] ==='z') count +=1
            }
            return count
        }
    })
    result.push(newArr)
}

