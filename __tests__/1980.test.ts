import { findDifferentBinaryString } from '../src/1980.js'

it('returns "11" for ["01", "10"]', () => {
  expect(findDifferentBinaryString(['01', '10'])).toBe('11')
})

it('returns "11" for ["00","01"]', () => {
  expect(findDifferentBinaryString(['00', '01'])).toBe('10')
})

it('returns "101" for ["111","011","001"]', () => {
  expect(findDifferentBinaryString(['111', '011', '001'])).toBe('000')
})
