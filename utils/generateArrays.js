function generateArray() {
  let res = []

  for (let i = 0; i < 100; i++) {
    let arr = []
    let len = Math.floor(Math.random() * 100)
    let min = -Math.floor(Math.random() * 30)
    let max = Math.floor(Math.random() * 30)

    for (let j = 0; j < len; j++) {
      let value = Math.round(min + Math.random() * max)
      if (Math.abs(value) == 0) {
        value = 0
      }
      arr.push(value)
    }
    res.push(arr)
  }

  res.push([])
  res.push([5])
  return res
}

module.exports = generateArray
