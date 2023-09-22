import { longestPalindrome } from '../src/5.js'

it('returns "aca" with s "aacabdkacaa"', () => {
  expect(longestPalindrome('aacabdkacaa')).toEqual('aca')
})

it('returns "ccc" with s "ccc"', () => {
  expect(longestPalindrome('ccc')).toEqual('ccc')
})

it('returns "a" with s "a"', () => {
  expect(longestPalindrome('a')).toEqual('a')
})

it('returns "bb" with s "bb"', () => {
  expect(longestPalindrome('bb')).toEqual('bb')
})

it('returns "aba" with s "aba"', () => {
  expect(longestPalindrome('aba')).toEqual('aba')
})

it('returns "aba" with s "babad"', () => {
  expect(longestPalindrome('babad')).toEqual('aba')
})

it('returns "bb" with s "cbbd"', () => {
  expect(longestPalindrome('cbbd')).toEqual('bb')
})

it('returns "a" with s "as"', () => {
  expect(longestPalindrome('as')).toEqual('s')
})

it('returns "aaaa" with s "aaaa"', () => {
  expect(longestPalindrome('aaaa')).toEqual('aaaa')
})

it('returns "aba" with s "caba"', () => {
  expect(longestPalindrome('caba')).toEqual('aba')
})
