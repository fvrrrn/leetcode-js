import { fullBloomFlowers } from '../src/2251.js'

it('returns [2, 4, 3, 1] with flowers = [[1,6],[3,7],[9,12],[4,13]], people = [2,3,7,11]', () => {
  expect(
    fullBloomFlowers(
      [
        [1, 6],
        [3, 7],
        [9, 12],
        [4, 13],
      ],
      [2, 3, 7, 11],
    ),
  ).toEqual([1, 2, 2, 2])
})

it('returns [2,2,1] with flowers = [[1,10],[3,3]], poeple = [3,3,2]', () => {
  expect(
    fullBloomFlowers(
      [
        [1, 10],
        [3, 3],
      ],
      [3, 3, 2],
    ),
  ).toEqual([2, 2, 1])
})
