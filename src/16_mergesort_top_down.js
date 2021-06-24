const copy = (target, source, i, j) => {
  if (i <= j) {
    for (let k = i; k <= j; k++) {
      target[k] = source[k]
    }
  }
}

function mergesort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  let temp = Array.from(arr)

  const merge = (arr, lo = 0, hi = arr.length - 1) => {
    if (lo < hi) {
      let mid = lo + Math.floor((hi - lo) / 2)
      merge(arr, lo, mid)
      merge(arr, mid + 1, hi)

      // merge two parts
      let i = lo
      let j = mid + 1

      for (let k = lo; k <= hi; k++) {
        // no items between lo and mid
        if (i > mid) {
          temp[k] = arr[j]
          j++
          continue
        }
        // no items between mid+1 and hi
        if (j > hi) {
          temp[k] = arr[i]
          i++
          continue
        }
        // items of two parts are avaiable
        if (arr[i] < arr[j]) {
          temp[k] = arr[i]
          i++
        } else {
          temp[k] = arr[j]
          j++
        }
      }

      // copy back
      copy(arr, temp, lo, hi)
    }
  }

  merge(arr)
  return arr
}

module.exports = mergesort
