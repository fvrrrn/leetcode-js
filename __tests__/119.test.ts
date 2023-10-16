import { getRow } from '../src/119.js'

it('returns [1] with rowIndex=0', () => {
  expect(getRow(0)).toEqual([1])
})

it('returns [1,1] with rowIndex=1', () => {
  expect(getRow(1)).toEqual([1, 1])
})

it('returns [1,3,3,1] with rowIndex=3', () => {
  expect(getRow(3)).toEqual([1, 3, 3, 1])
})

it('returns [...] with rowIndex=33', () => {
  expect(getRow(33)).toEqual([
    1, 33, 528, 5456, 40920, 237336, 1107568, 4272048, 13884156, 38567100,
    92561040, 193536720, 354817320, 573166440, 818809200, 1037158320,
    1166803110, 1166803110, 1037158320, 818809200, 573166440, 354817320,
    193536720, 92561040, 38567100, 13884156, 4272048, 1107568, 237336, 40920,
    5456, 528, 33, 1,
  ])
})
