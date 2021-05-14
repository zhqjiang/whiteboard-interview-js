
const generateArrays = require('../utils/generateArrays')
const quicksort = require('../src/15_quicksort_hoare_partition')

const arrs = generateArrays()

test('15_quicksort_hoare_partition', () => {
  for (arr of arrs) {
    let newArr = Array.from(arr)
    expect(
      newArr.sort(function (a, b) {
        return a - b
      })
    ).toEqual(quicksort(arr))
  }
})
