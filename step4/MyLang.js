class MyLang {
  constructor() {}

  exec(str) {
    return this.expression(str)
  }

  tokenize(str) {
    return str.split(/\s+/)
  }

  expression(str) {
    const tokens = this.tokenize(str)
    let idx = 0;

    let result = 1
    if (tokens[idx] === '+') {
      idx++
    } else if (tokens[idx] === '-') {
      result = -1
      idx++
    }
    result *= Number(tokens[idx++])

    while (tokens[idx] === '+' || tokens[idx] === '-') {
      switch (tokens[idx++]) {
        case '+':
          result += Number(tokens[idx++])
          break
        case '-':
          result -= Number(tokens[idx++])
          break
      }
    }
    return result
  }
}

 module.exports = MyLang
