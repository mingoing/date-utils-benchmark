import { format1, format2 } from './format'

const cases = [
  { input: '20221231235959', expected: '2022Y12M31D 23:59:59' },
  { input: '20000101000000', expected: '2000Y01M01D 00:00:00' },
  { input: '20991231235959', expected: '2099Y12M31D 23:59:59' },
]

describe('format1', () => {
  it('should format valid date strings correctly', () => {
    cases.forEach(({ input, expected }) => {
      expect(format1(input)).toBe(expected)
    })
  })
})

describe('format2', () => {
  it('should format valid date strings correctly', () => {
    cases.forEach(({ input, expected }) => {
      expect(format2(input)).toBe(expected)
    })
  })
})
