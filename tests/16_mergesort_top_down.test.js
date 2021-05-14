const generateArrays = require('../utils/generateArrays')
const quicksort = require('../src/16_mergesort_top_down')

const arrs = generateArrays()

test('16_mergesort_top_down', () => {
  for (arr of arrs) {
    let newArr = Array.from(arr)
    expect(
      newArr.sort(function (a, b) {
        return a - b
      })
    ).toEqual(quicksort(arr))
  }
})
