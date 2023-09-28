import { decodeAtIndex } from '../src/880.js'

it('returns "c" with s "a2b3c4d5e6f7g8h9" and k 10', () => {
  expect(decodeAtIndex('a2b3c4d5e6f7g8h9', 10)).toEqual('c')
})

it('returns "o" with s "leet2code3" and k 10', () => {
  expect(decodeAtIndex('leet2code3', 10)).toEqual('o')
})

it('returns "h" with s "ha22" and k 5', () => {
  expect(decodeAtIndex('ha22', 5)).toEqual('h')
})

it('returns "a" with s "a2345678999999999999999" and k 1', () => {
  expect(decodeAtIndex('a2345678999999999999999', 1)).toEqual('a')
})
