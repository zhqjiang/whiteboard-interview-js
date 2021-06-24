const generateArrays = require('../utils/generateArrays')
const quicksort = require('../src/16_mergesort_bottom_up')

const arrs = generateArrays()

test('16_mergesort_bottom_up', () => {
  for (arr of arrs) {
    let newArr = Array.from(arr)
    expect(
      newArr.sort(function (a, b) {
        return a - b
      })
    ).toEqual(quicksort(arr))
  }
})
