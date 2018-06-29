let tokenize = (str) => {
  return str.split(/\s+/)
}

let expression = (str) => {
  let tokens = tokenize(str)
  let idx = 0;
  let result = Number(tokens[idx++])
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

let input = process.argv[2]
console.log(input, '=', expression(input))
