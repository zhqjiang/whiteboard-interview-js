const quicksort = (arr, lo = 0, hi = arr.length - 1) => {
  if (arr.length <= 1) {
    return arr
  }

  if (lo < hi) {
    let p = partition(arr, lo, hi)
    quicksort(arr, lo, p)
    quicksort(arr, p + 1, hi)
  }

  return arr
}

const swap = (arr, m, n) => {
  ;[arr[m], arr[n]] = [arr[n], arr[m]]
}

const partition = (arr, lo, hi) => {
  let mid = lo + Math.floor((hi - lo) / 2)

  let pivot = arr[mid]

  let i = lo
  let j = hi

  while (true) {
    while (arr[i] < pivot) {
      i++
    }
    while (arr[j] > pivot) {
      j--
    }
    if (i >= j) {
      break
    }
    swap(arr, i, j)
    i++
    j--
  }

  return j
}

module.exports = quicksort