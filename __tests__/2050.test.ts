import { minimumTime } from '../src/2050.js'

it('returns 12 with relations=[[1,5],[2,5],[3,5],[3,4],[4,5]] and time=[1,2,3,4,5]', () => {
  expect(
    minimumTime(
      5,
      [
        [1, 5],
        [2, 5],
        [3, 5],
        [3, 4],
        [4, 5],
      ],
      [1, 2, 3, 4, 5],
    ),
  ).toEqual(12)
})

it('returns 6 with relations=[[1,3],[2,3]] and time=[3,2,5]', () => {
  expect(
    minimumTime(
      3,
      [
        [1, 3],
        [2, 3],
      ],
      [3, 2, 5],
    ),
  ).toEqual(8)
})

it('returns 2 with relations=[] and time=[3,2]', () => {
  expect(minimumTime(2, [], [3, 2])).toEqual(3)
})

it('returns 32 with relations=[[2,7],[2,6],[3,6],[4,6],[7,6],[2,1],[3,1],[4,1],[6,1],[7,1],[3,8],[5,8],[7,8],[1,9],[2,9],[6,9],[7,9]] and time=[9,5,9,5,8,7,7,8,4]', () => {
  expect(
    minimumTime(
      9,
      [
        [2, 7],
        [2, 6],
        [3, 6],
        [4, 6],
        [7, 6],
        [2, 1],
        [3, 1],
        [4, 1],
        [6, 1],
        [7, 1],
        [3, 8],
        [5, 8],
        [7, 8],
        [1, 9],
        [2, 9],
        [6, 9],
        [7, 9],
      ],
      [9, 5, 9, 5, 8, 7, 7, 8, 4],
    ),
  ).toEqual(32)
})
