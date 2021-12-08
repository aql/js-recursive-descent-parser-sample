const tokenize = (str) => {
  return str.split(/\s+/)
}

const expression = (str) => {
  const tokens = tokenize(str)
  let idx = 0;
  let result = Number(tokens[idx++])
  while ( tokens[idx++] === '+' ) {
    result += Number(tokens[idx++])
  }
  return result
}

const input = process.argv[2]
console.log(input, '=', expression(input))
