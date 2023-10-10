import { isPalindrome } from '../src/9.js'

it('returns true with x=121', () => {
  expect(isPalindrome(121)).toEqual(true)
})

it('returns false with x=10', () => {
  expect(isPalindrome(10)).toEqual(false)
})
