import { SeatManager } from '../src/1845.js'

it('returns [5,7,2,3,2] for pref=[5,2,0,3,1]', () => {
  const seatManager = new SeatManager(5)
  expect(seatManager.reserve()).toBe(1) // All seats are available, so return the lowest numbered seat, which is 1.
  expect(seatManager.reserve()).toBe(2) // The available seats are [2,3,4,5], so return the lowest of them, which is 2.
  seatManager.unreserve(2) // Unreserve seat 2, so now the available seats are [2,3,4,5].
  expect(seatManager.reserve()).toBe(2) // The available seats are [2,3,4,5], so return the lowest of them, which is 2.
  expect(seatManager.reserve()).toBe(3) // The available seats are [3,4,5], so return the lowest of them, which is 3.
  expect(seatManager.reserve()).toBe(4) // The available seats are [4,5], so return the lowest of them, which is 4.
  expect(seatManager.reserve()).toBe(5) // The only available seat is seat 5, so return 5.
  seatManager.unreserve(5) // Unreserve seat 5, so now the available seats are [5]
  expect(seatManager.reserve()).toBe(5) // The only available seat is seat 5, so return 5.
})
