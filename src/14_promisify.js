function loadScript(src, callback) {
  let script = document.createElement('script')
  script.src = src

  script.onload = () => callback(null, script)
  script.onerror = () => callback(new Error(`Script load error for ${src}`))

  document.head.append(script)
}

function promisify(f) {
  return function (...args) {
    return new Promise(function (resovle, reject) {
      function callback(err, result) {
        if (err) {
          reject(err)
        } else {
          resovle(result)
        }
      }

      args.push(callback)

      f.call(this, ...args)
    })
  }
}

// usage
let loadScriptPromise = promisify(loadScript)
loadScriptPromise('./src/index.js').then(
  (result) => console.log('ok'),
  (error) => console.log(error)
)
