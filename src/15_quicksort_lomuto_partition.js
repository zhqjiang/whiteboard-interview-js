const quicksort = (arr, lo = 0, hi = arr.length - 1) => {
  if (arr.length <= 1) {
    return arr
  }
  if (lo < hi) {
    let p = partition(arr, lo, hi)
    quicksort(arr, lo, p - 1)
    quicksort(arr, p, hi)
  }
  return arr
}

const swap = (arr, m, n) => {
  ;[arr[m], arr[n]] = [arr[n], arr[m]]
}

const partition = (arr, lo, hi) => {
  let i = lo
  let pivot = arr[hi]

  for (let j = lo; j < hi; j++) {
    if (arr[j] <= pivot) {
      swap(arr, i, j)
      i++
    }
  }

  swap(arr, i, hi)
  return i
}

module.exports = quicksort