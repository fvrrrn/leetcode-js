import { isReachableAtTime } from '../src/2849.js'

it('returns false for sx = 1, sy = 2, fx = 1, fy = 2, t = 1', () => {
  expect(isReachableAtTime(1, 2, 1, 2, 1)).toBe(false)
})

it('returns false for sx = 1, sy = 1, fx = 1, fy = 2, t = 1', () => {
  expect(isReachableAtTime(1, 1, 1, 2, 0)).toBe(false)
})

it('returns false for sx = 1, sy = 1, fx = 2, fy = 2, t = 1', () => {
  expect(isReachableAtTime(1, 1, 2, 2, 1)).toBe(true)
})

it('returns true for sx = 2, sy = 4, fx = 7, fy = 7, t = 6', () => {
  expect(isReachableAtTime(2, 4, 7, 7, 6)).toBe(true)
})

it('returns false for sx = 3, sy = 1, fx = 7, fy = 3, t = 3', () => {
  expect(isReachableAtTime(3, 1, 7, 3, 3)).toBe(false)
})
