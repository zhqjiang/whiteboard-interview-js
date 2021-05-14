const shallowCopy = (obj) => {
  if (typeof obj !== 'object') return
  let newObj = obj instanceof Array ? [] : {}

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key]
    }
  }

  return newObj
}

let a = {
  a: {
    value: 'a'
  }
}

const b = shallowCopy(a)
a.a.value = 'changed'
console.log(b.a.value == 'changed') // true
