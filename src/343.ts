// 343. Integer Break
// Given an integer n, break it into the sum of k positive integers, where k >= 2, and maximize the product of those integers.
// Return the maximum product you can get.

// Example 1:
// Input: n = 2
// Output: 1
// Explanation: 2 = 1 + 1, 1 × 1 = 1.

// Example 2:
// Input: n = 10
// Output: 36
// Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.

// Constraints:
// 2 <= n <= 58

// I saw many solutions were referring to factors of 2 and 3. But why these two magic numbers? Why other factors do not work?
// Let's study the math behind it.

// For convenience, say n is sufficiently large and can be broken into any smaller real positive numbers. We now try to calculate which real number generates the largest product.
// Assume we break n into (n / x) x's, then the product will be xn/x, and we want to maximize it.

// Taking its derivative gives us n * x^(n/x-2) * (1 - ln(x)).
// The derivative is positive when 0 < x < e, and equal to 0 when x = e, then becomes negative when x > e,
// which indicates that the product increases as x increases, then reaches its maximum when x = e, then starts dropping.

// This reveals the fact that if n is sufficiently large and we are allowed to break n into real numbers,
// the best idea is to break it into nearly all e's.
// On the other hand, if n is sufficiently large and we can only break n into integers, we should choose integers that are closer to e.
// The only potential candidates are 2 and 3 since 2 < e < 3, but we will generally prefer 3 to 2. Why?

// Of course, one can prove it based on the formula above, but there is a more natural way shown as follows.

// 6 = 2 + 2 + 2 = 3 + 3. But 2 * 2 * 2 < 3 * 3.
// Therefore, if there are three 2's in the decomposition, we can replace them by two 3's to gain a larger product.

// All the analysis above assumes n is significantly large. When n is small (say n <= 10), it may contain flaws.
// For instance, when n = 4, we have 2 * 2 > 3 * 1.
// To fix it, we keep breaking n into 3's until n gets smaller than 10, then solve the problem by brute-force.

export const integerBreak = (n: number): number => {
  if (n == 2) return 1
  if (n === 3) return 2
  switch (n % 3) {
    // Split this number into one less than as many 3s as possible and one 4.
    case 1:
      return 4 * Math.pow(3, Math.floor(n / 3) - 1)
    // Split this number into as many 3s as possible and one 2
    case 2:
      return 2 * Math.pow(3, Math.floor(n / 3))
    // If 0 then split this number into entirely threes.
    default:
      return Math.pow(3, n / 3)
  }
}
