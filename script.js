function generateList(array) {
  const createUl = document.createElement('ul')

  for (let i of array) {
    const createLi = document.createElement('li')
    if (Array.isArray(i)) {
      createLi.appendChild(generateList(i))
    } else {
      createLi.innerHTML = i
    }
    createUl.appendChild(createLi)
  }

  return createUl
}

const arr = [1, 2, 3, [1, 2, 3], 4, 5, [1, 2, 3], [1, [1.1, 1.2, 1.3], 3], 8, 9]

const list = generateList(arr)
document.body.appendChild(list)
