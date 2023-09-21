import { lengthOfLongestSubstring } from '../src/3.js'

it('returns 3 with s equals "abcabcbb"', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3)
})

it('returns 1 with s equals "bbbbb"', () => {
  expect(lengthOfLongestSubstring('bbbbb')).toEqual(1)
})

it('returns 3 with s equals "pwwkew"', () => {
  expect(lengthOfLongestSubstring('pwwkew')).toEqual(3)
})

it('returns 3 with s equals "dvdf"', () => {
  expect(lengthOfLongestSubstring('dvdf')).toEqual(3)
})
