let MyBuffer = require('./MyBuffer.js')

class MyLexer {
  constructor(str) {
    this.idx = 0
    this.tokens = []
    if (str) {
      this.tokenize(str)
    }
  }

  tokenize(str) {
    if (str) {
      this.buf = new MyBuffer(str)
      this.tokens.splice(0)
    }

    while (this.buf.exist()) {
      if (/\d/.test(this.buf.read())) {
        this.tokens.push(this.getlex_number(this.buf))
      } else if (/[\+\-\*\/\(\)]/.test(this.buf.read())) {
        this.tokens.push(this.getlex_symbol(this.buf))
      } else {
        this.buf.next()
      }
    }

    return this.tokens
  }

  getlex_number(buf) {
    let num = ''
    while (/\d/.test(buf.read())) {
      num += buf.next()
    }
    return Number(num)
  }

  getlex_symbol(buf) {
    return buf.next()
  }

  exist() {
    if (this.idx < 0) {
      return false
    }
    if (this.tokens.length <= this.idx) {
      return false
    }
    return true
  }

  read() {
    return this.tokens[this.idx]
  }
  next() {
    return this.tokens[this.idx++]
  }
}

module.exports = MyLexer
