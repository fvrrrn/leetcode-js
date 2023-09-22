// 7. Reverse Integer
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Constraints:
// -2^31 <= x <= 2^31 - 1

export const reverse = (x: number): number => {
  const minInt = -Math.pow(2, 31)
  const maxInt = -minInt - 1

  const isNegative = x < 0
  let reversed = 0
  if (isNegative) {
    x = -x
  }

  while (x > 0) {
    const remainder = x % 10
    reversed = reversed * 10 + remainder
    x = Math.floor(x / 10)
  }

  if (reversed > maxInt) {
    return 0
  }
  return isNegative ? -reversed : reversed
}
