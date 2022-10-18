function* idGen() {
  let i = 0
  while(true) {
    yield i++
  }
}

const genId = idGen()

export function domDisplay (content, groupName, isCode) {
  const formatedArray = formatObject(content, isCode)
  const root = document.getElementById('root')
  let parentNode = root

  formatedArray.forEach(wordObj => {
    const span = document.createElement('span')
    span.setAttribute('id', `${genId.next().value}`)
    span.classList.add('dom-display')
    span.innerHTML=`${wordObj.value}`
    if(wordObj.type === 'keyword') span.classList.add('keyword')
    if(wordObj.type === 'symbol') span.classList.add('symbol')
    if (groupName) {
      const existingGroupElement = document.getElementsByClassName(groupName)
      if (!existingGroupElement[0]) {
        const newGroup = document.createElement('div')
        newGroup.classList.add('dom-display-group')
        newGroup.classList.add(groupName)
        root.append(newGroup)
        parentNode = newGroup
      } else {
        parentNode = existingGroupElement[0]
      }
    }
    parentNode.appendChild(span)
    
  } )
  parentNode.appendChild(document.createElement('br'))
}

const keywords = ['function', 'return', 'this', '=', 'const', 'let']
const symbols = ['(', ')', '[', ']', '{', '}', ':']

export function formatObject(input, isCode) {
  let string
  if ( Array.isArray(input) || typeof input === 'object' ) string = JSON.stringify(input)
  else string = input.toString()

  const charArr = string.split('')
  const spacedArr = charArr.map(char => {
    if (symbols.includes(char)) return ` ${char} `
    else if (char === '"') return ""
    else return char
  })
  console.log(spacedArr)
  const coloredArr = spacedArr
  .join('')
  .split(' ')
  .map(word => {
    if(keywords.includes(word)) return {value: word, type: 'keyword'}
    if (symbols.includes(word)) return {value: word, type: 'symbol'}
    return {value: word, type: 'none'}
  })

  return coloredArr
}