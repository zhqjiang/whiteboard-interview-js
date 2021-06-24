const copy = (target, source, i, j) => {
  if (i <= j) {
    for (let k = i; k <= j; k++) {
      target[k] = source[k]
    }
  }
}

function mergesort(arr) {
  let len = arr.length
  if (len <= 1) {
    return arr
  }

  let temp = Array.from(arr)

  const merge = (l1, r1, l2, r2) => {
    for (let k = l1; k <= r2; k++) {
      let idx1 = l1
      let idx2 = l2

      if (idx2 > r2) {
        temp[k] = arr[idx1]
        idx1++
        continue
      }

      if (idx1 > r1) {
        temp[k] = arr[idx2]
        idx2++
        continue
      }

      if (arr[idx1] < arr[idx2]) {
        temp[k] = arr[idx1]
        idx1++
      } else {
        temp[k] = arr[idx2]
        idx2++
      }
    }

    copy(arr, temp, l1, r2)
  }

  for (let width = 1; width < len; width *= 2) {
    for (let t = 0; t < len; t += 2 * width) {
      // if the second part is not empty
      if (t + width < len) {
        merge(t, t + width - 1, t + width, Math.min(t + width * 2 - 1, len - 1))
      }
    }
  }

  return arr
}

module.exports = mergesort
