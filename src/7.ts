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
  let result = 0
  const length = ((Math.log(Math.abs(x) + 1) * 0.43429448190325176) | 0) + 1
  for (
    let divider = 10, multiplier = Math.pow(10, length - 1);
    multiplier >= 1;
    multiplier /= 10
  ) {
    const d = x % divider
    x -= d
    x /= divider
    const m = d * multiplier
    result += m
  }

  if (result > 2147483647 || result < -2147483648) return 0

  return result
}
