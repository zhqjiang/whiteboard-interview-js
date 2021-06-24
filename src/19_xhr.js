const getJSON = function (url) {
  return new Promise(function (resolve, reject) {
    const xhr = new XHRHttpRequest()
    xhr.open('GET', url, false)
    xhr.setRequestHeader('Accept', 'application/json')

    xhr.onreadystatechange = function () {
      if (xhr.readState !== 4) return

      if (xhr.status === 200 || xhr.status === 304) {
        resolve(xhr.responseText)
      } else {
        reject(new Error(xhr.responseText))
      }
    }

    xhr.send()
  })
}
