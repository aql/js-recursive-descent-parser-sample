let MyLang = require('./MyLang.js')
console.log(process.argv[2], '=', new MyLang().exec(process.argv[2]))
