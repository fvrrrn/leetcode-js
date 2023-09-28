import { sortArrayByParity } from '../src/905.js'

it('returns [4,2,1,3] with nums [3,1,2,4]', () => {
  expect(sortArrayByParity([3, 1, 2, 4])).toEqual([4, 2, 1, 3])
})

it('returns [0] with nums [0]', () => {
  expect(sortArrayByParity([0])).toEqual([0])
})
