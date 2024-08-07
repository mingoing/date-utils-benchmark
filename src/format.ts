// solution one:
// the input format is correct,no verification is required;
// the length of the string still is 14.
export function format1(inputString: string) {
  const matches = inputString.match(/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/)

  if (!matches) {
    throw new Error('Invalid date string')
  }

  const [_, year, month, day, hour, minute, second] = matches

  return `${year}Y${month}M${day}D ${hour}:${minute}:${second}`
}

// solution two:
export function format2(inputString: string) {
  const [year, month, day, hour, minute, second] = [
    inputString.slice(0, 4),
    inputString.slice(4, 6),
    inputString.slice(6, 8),
    inputString.slice(8, 10),
    inputString.slice(10, 12),
    inputString.slice(12, 14),
  ]

  return `${year}Y${month}M${day}D ${hour}:${minute}:${second}`
}
