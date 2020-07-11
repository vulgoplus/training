export function getQueryString(obj) {
  if (!obj) {
    return ''
  }
  let string = ''
  Object.keys(obj).forEach(key => {
    if (obj[key]) {
      return string += key + '=' + obj[key] + '&'
    }
  })
  return string
}

export function getQueryArray(key, array) {
  if (!array || !array.length) {
    return ''
  }
  const string = array.map(el => {
    return key + '=' + el
  }).join('&')
  return string
}