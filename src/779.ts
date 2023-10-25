// 779. K-th Symbol in Grammar
// We build a table of n rows (1-indexed). We start by writing 0 in the 1st row. Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.
// For example, for n = 3, the 1st row is 0, the 2nd row is 01, and the 3rd row is 0110.
// Given two integer n and k, return the kth (1-indexed) symbol in the nth row of a table of n rows.

// Example 1:
// Input: n = 1, k = 1
// Output: 0
// Explanation: row 1: 0

// Example 2:
// Input: n = 2, k = 1
// Output: 0
// Explanation:
// row 1: 0
// row 2: 01

// Example 3:
// Input: n = 2, k = 2
// Output: 1
// Explanation:
// row 1: 0
// row 2: 01

// Constraints:
// 1 <= n <= 30
// 1 <= k <= 2n - 1

export const kthGrammar = (n: number, k: number): number => {
  if (n <= 1 || k <= 1) return 0

  //Each n-th row has 2 ^ (n - 1) symbols.
  //1, 2, 4, 8, 16....
  const l = 1 << (n - 1) //length =  2 ^ (n - 1)

  //Get last symbol of the row (k >= l)
  //for even n row ends with '1' for odd n row ends with '0'
  if (k >= l) return ((n & 1) + 1) & 1 //switch odd check with even.

  //Each half of the row is inverted of another one.
  //One approach is binary search that costs O(log N) moving half-by-half
  //The other is derived formula for k-th symbol that costs O(1)

  //If we look at sequence of binary numbers and count ones '1' bits
  //1  (1)

  //10 (1)
  //11 (2)

  //100 (1)
  //101 (2)
  //-------
  //110 (2)
  //111 (3)

  //1000 (1)
  //1001 (2)
  //1010 (2)
  //1011 (3)
  //--------
  //1100 (2)
  //1101 (3)
  //1110 (3)
  //1111 (4)

  //10000 (1)
  //10001 (2)
  //10010 (2)
  //10011 (3)
  //10100 (2)
  //10101 (3)
  //10110 (3)
  //10111 (4)
  //--------
  //11000 (2)
  //11001 (3)
  //11010 (3)
  //11011 (4)
  //11100 (3)
  //11101 (4)
  //11110 (4)
  //11111 (5)

  //We got the sequence of 'ones' count for each power of 2
  // 1, 12, 1223, 12232334
  //12 => 1 | 2
  //1223 => 12 | 23
  //12232334 => 1223 | 2334.
  //it is almost the same. The only difference is incrementing.
  //With radix = 2:   0 + 1 = 1,     1 + 1 = 0.
  //With radix = 10:  1 + 1 = 2, ... 1 + 9 = 0.

  --k
  // see: https://stackoverflow.com/questions/43122082/efficiently-count-the-number-of-bits-in-an-integer-in-javascript
  // https://graphics.stanford.edu/~seander/bithacks.html
  k = k - ((k >> 1) & 0x55555555)
  k = (k & 0x33333333) + ((k >> 2) & 0x33333333)
  k = (((k + (k >> 4)) & 0xf0f0f0f) * 0x1010101) >> 24

  return k & 1
}
