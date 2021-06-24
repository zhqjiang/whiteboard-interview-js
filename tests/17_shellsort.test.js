const generateArrays = require('../utils/generateArrays')
const quicksort = require('../src/17_shellsort')

const arrs = generateArrays()

test('17_shellsort', () => {
  for (arr of arrs) {
    let newArr = Array.from(arr)
    expect(
      newArr.sort(function (a, b) {
        return a - b
      })
    ).toEqual(quicksort(arr))
  }
})
