class EevntEmitter {
  constructor() {
    this.cache = new Map()
  }

  on(name, fn) {
    let tasks
    if (this.cache.get(name)) {
      tasks = this.cache.get(name)
    } else {
      tasks = new Set()
      this.cache.set(name, tasks)
    }

    tasks.add(fn)
  }

  off(name, fn) {
    const tasks = this.cache.get(name)
    if (tasks) {
      tasks.delete(fn)
    }
  }

  emit(name, ...args) {
    const tasks = this.cache.get(name)
    if (tasks) {
      tasks.forEach((fn) => {
        fn(...args)
      })
    }
  }
}

let eventBus = new EevntEmitter()

let fn1 = function (name, age) {
  console.log(`fn1, ${name} ${age}`)
}

let fn2 = function (name, age) {
  console.log(`fn2, ${name} ${age}`)
}

eventBus.on('aaa', fn1)
eventBus.on('aaa', fn2)

eventBus.emit('aaa', 'Jonathan', 17)

// fn1, Jonathan 17
// fn2, Jonathan 17
