import { findArray } from '../src/2433.js'

it('returns [5,7,2,3,2] for pref=[5,2,0,3,1]', () => {
  expect(findArray([5, 2, 0, 3, 1])).toEqual([5, 7, 2, 3, 2])
})

it('returns [13] for pref=[13]', () => {
  expect(findArray([13])).toEqual([13])
})

it('returns [] for pref=[]', () => {
  expect(findArray([])).toEqual([])
})

it('returns [5,7] for pref=[5,2]', () => {
  expect(findArray([5, 7])).toEqual([5, 2])
})
