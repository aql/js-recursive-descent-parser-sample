const MyLexer = require('./MyLexer.js')

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
    result *= Number(lexer.next())

    while (lexer.read() === '+' || lexer.read() === '-') {
      switch (lexer.next()) {
        case '+':
          result += Number(lexer.next())
          break
        case '-':
          result -= Number(lexer.next())
          break
      }
    }
    return result
  }
}

module.exports = MyLang
