import { sortArrayByParity } from '../src/905.js'

it('returns [4,2,1,3] with nums [3,1,2,4]', () => {
  expect(sortArrayByParity([3, 1, 2, 4])).toEqual([2, 4, 3, 1])
})

// it('returns [0] with nums [0]', () => {
//   expect(sortArrayByParity([0])).toEqual([0])
// })

// it('returns [0,2] with nums [0,2]', () => {
//   expect(sortArrayByParity([0, 2])).toEqual([0, 2])
// })

// it('returns [0,1] with nums [0,1]', () => {
//   expect(sortArrayByParity([0, 1])).toEqual([0, 1])
// })

// it('returns [0,3,1] with nums [1,0,3]', () => {
//   expect(sortArrayByParity([1, 0, 3])).toEqual([0, 3, 1])
// })
