import { backspaceCompare } from '../src/844.js'

it('returns true with s = "ab#c", t = "ad#c"', () => {
  expect(backspaceCompare('ab#c', 'ad#c')).toEqual(true)
})

it('returns true with s = "ab##", t = "c#d#"', () => {
  expect(backspaceCompare('ab##', 'c#d#')).toEqual(true)
})

it('returns false with s = "a#c", t = "b"', () => {
  expect(backspaceCompare('a#c', 'b')).toEqual(false)
})
