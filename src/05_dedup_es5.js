function unique(arr) {
  var res = arr.filter(function (ele, index, array) {
    return array.indexOf(ele) === index
  })
  return res
}

let nums = [1, 3, 5, 5, 3, 1]
console.log(unique(nums))
