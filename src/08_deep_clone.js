class DeepClone {
  constructor() {
    this.cacheList = [] // use cachelist to solve circular reference
  }
  clone(source) {
    if (source instanceof Object) {
      const cache = this.findCache(source)
      if (cache) return cache
      else {
        let target
        if (target instanceof Array) {
          target = new Array()
        } else if (target instanceof Function) {
          target = function () {
            return source.apply(this, arguments)
          }
        } else if (target instanceof Date) {
          target = new Date(source)
        } else if (target instanceof RegExp) {
          target = new RegExp(source.source, source.flags)
        } else {
          target = new Object()
        }

        this.cacheList.push([source, target])
        for (let key in source) {
          if (source.hasOwnProperty(key)) {
            target[key] = this.clone(source[key])
          }
        }
        return target
      }
    } else {
      return source
    }
  }
  findCache(source) {
    for (let i = 0; i < this.cacheList.length; ++i) {
      if (this.cacheList[i][0] === source) {
        return this.cacheList[i][1]
      }
    }
  }
}
