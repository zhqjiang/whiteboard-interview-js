const shellsort = (arr, n = arr.length) => {
  let h = 1
  while (h < Math.floor(n / 3)) {
    h = h * 3 + 1
  }

  while (h >= 1) {
    for (let i = h; i < n; i += 1) {
      let temp = arr[i]

      let j = i
      while (j >= h && arr[j - h] > temp) {
        arr[j] = arr[j - h]
        j -= h
      }

      arr[j] = temp
    }

    h = Math.floor(h / 3)
  }

  return arr
}

module.exports = shellsort
