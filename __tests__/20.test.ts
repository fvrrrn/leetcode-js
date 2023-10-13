import { isValid } from '../src/20.js'

it('returns true with s=()[]{}', () => {
  expect(isValid('()[]{}')).toEqual(true)
})

it('returns false with s=(]', () => {
  expect(isValid('(]')).toEqual(false)
})

it('returns true with s=()', () => {
  expect(isValid('()')).toEqual(true)
})
