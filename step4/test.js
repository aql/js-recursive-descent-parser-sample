let MyLang = require('./MyLang.js')

let lang = new MyLang()

let tests = [{
    input: '1 + 2',
    expect: 3
  },
  {
    input: '1 + 2 + 3',
    expect: 6
  },
  {
    input: '1 + 2 - 3',
    expect: 0
  },
  {
    input: '- 1 + 2 - 3',
    expect: -2
  }
]

for (let test of tests) {
  let result = lang.exec(test.input)
  console.log(
    result === test.expect ? '[OK]' : '[NG]',
    test.input, '=', result
  )
}
