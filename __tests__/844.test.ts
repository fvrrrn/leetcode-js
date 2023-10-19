import { sortArrayByParity } from '../src/905.js'

it('returns [4,2,1,3] with nums [3,1,2,4]', () => {
  expect(sortArrayByParity([3, 1, 2, 4])).toEqual([2, 4, 3, 1])
})
