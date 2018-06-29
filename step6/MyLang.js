let MyLexer = require('./MyLexer.js')

class MyLang {
  constructor() {}

  exec(str) {
    return this.expression(new MyLexer(str))
  }

  expression(lexer) {
    let result = 1
    if (lexer.read() === '+') {
      lexer.next()
    } else if (lexer.read() === '-') {
      result = -1
      lexer.next()
    }
    result *= Number(this.term(lexer))

    while (lexer.read() === '+' || lexer.read() === '-') {
      switch (lexer.next()) {
        case '+':
          result += Number(this.term(lexer))
          break
        case '-':
          result -= Number(this.term(lexer))
          break
      }
    }
    return result
  }

  term(lexer) {
    let result = lexer.next()
    while (lexer.read() === '*' || lexer.read() === '/') {
      switch (lexer.next()) {
        case '*':
          result *= Number(lexer.next())
          break
        case '/':
          result /= Number(lexer.next())
          break
      }
    }
    return result
  }
}

module.exports = MyLang
