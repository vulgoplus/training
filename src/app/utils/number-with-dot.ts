export function generateNumberWithDot(number) {
  if (!number) {
    return 0
  }

  let sign = ''
  
  if (number < 0) {
    sign = '-'
    number = 0 - number
  }

  let string = number.toString()
  let value = null

  if (string.substring(0, 1) == 0 && string.length > 1) {
    string = string.substring(1)
  }

  if (string.length > 3) {
    for (let i = string.length; i > 0; i -= 3) {
      if (i === 0) return
      else if (i < 4 && i > 0) {
        value = string.substring(0, i) + '.' + value
        break
      } else {
        if (!value) {
          value = string.substring(i - 3, i)
        } else {
          value = string.substring(i - 3, i) + '.' + value
        }
      }
    }
  } else {
    value = string
  }

  return sign + value
}
