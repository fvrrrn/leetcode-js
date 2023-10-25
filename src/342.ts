// 342. Power of Four
// Given an integer n, return true if it is a power of four. Otherwise, return false.
// An integer n is a power of four, if there exists an integer x such that n == 4x.

// Example 1:
// Input: n = 16
// Output: true

// Example 2:
// Input: n = 5
// Output: false

// Example 3:
// Input: n = 1
// Output: true

// Constraints:
// -231 <= n <= 231 - 1
// Follow up: Could you solve it without loops/recursion?

export const isPowerOfFour = (n: number): boolean => {
  if ((n & 0x10000000) == 1 || n == 0) return false //negative or ZERO
  if (n == 1) return true //ONE.

  //4 = 100, 16 = 10000, 64 = 1000000, ....
  //3 = 11, 15 = 1111, 63 = 111111, ...
  const mask = 0b01010101010101010101010101010101

  return (n & (n - 1)) == 0 && (n | mask) == mask

  // Solution 2
  // if (n < 0) return false
  // const log4 = Math.log(n) / Math.log(4)
  // return log4 === (log4 | 0)

  // Solution 3
  // for (let i = 0; i < 20; i++) {
  //   if (4 ** i === n) return true
  // }
  // return false
}
