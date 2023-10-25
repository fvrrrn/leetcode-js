import { kthGrammar } from '../src/779.js'

it('returns 0 for n=1,k=1', () => {
  expect(kthGrammar(1, 1)).toEqual(0)
})

it('returns 0 for n=2,k=1', () => {
  expect(kthGrammar(2, 1)).toEqual(0)
})

it('returns 1 for n=2,k=2', () => {
  expect(kthGrammar(2, 2)).toEqual(1)
})
