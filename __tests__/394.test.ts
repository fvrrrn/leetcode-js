import { isSubsequence } from '../src/394.js'

it('returns true with s "abc" and t "ahbgdc"', () => {
  expect(isSubsequence('abc', 'ahbgdc')).toEqual(true)
})

it('returns false with s "axc" and t "ahbgdc"', () => {
  expect(isSubsequence('axc', 'ahbgdc')).toEqual(false)
})

it('returns false with s "" and t ""', () => {
  expect(isSubsequence('', '')).toEqual(true)
})
