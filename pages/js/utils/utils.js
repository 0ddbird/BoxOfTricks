function* idGen() {
  let i = 0
  while(true) {
    yield i++
  }
}

const genId = idGen()

export function domDisplay (content, groupName) {
  

  const formatedContent = formatObject(content)

  const root = document.getElementById('root')
  let parentNode = root
  const p = document.createElement('p')
  p.setAttribute('id', `${genId.next().value}`)
  p.classList.add('dom-display')
  p.innerHTML=`${formatedContent}`

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
  parentNode.appendChild(p)
}


export function formatObject(obj) {
  if(Array.isArray(obj) || typeof obj === 'object') {
    const stringified = JSON.stringify(obj)
    const charArr = stringified.split('')
    const formatedArr = charArr.map(char => {
      if(char === '[' 
      || char === '(' 
      ||char === '{'
      ||char === ','
      ||char === ':') return `${char} `
      else if (char === ']' || char === ')' || char === '}') return ` ${char}`
      else if(char === '"') return ""
      else return char
    })
    return formatedArr.join('')
  }
  return obj
}