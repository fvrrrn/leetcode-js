// 880. Decoded String at Index

// You are given an encoded string s. To decode the string to a tape, the encoded string is read one character at a time and the following steps are taken:

// If the character read is a letter, that letter is written onto the tape.
// If the character read is a digit d, the entire current tape is repeatedly written d - 1 more times in total.
// Given an integer k, return the kth letter (1-indexed) in the decoded string.

// Example 1:

// Input: s = "leet2code3", k = 10
// Output: "o"
// Explanation: The decoded string is "leetleetcodeleetleetcodeleetleetcode".
// The 10th letter in the string is "o".
// Example 2:

// Input: s = "ha22", k = 5
// Output: "h"
// Explanation: The decoded string is "hahahaha".
// The 5th letter is "h".
// Example 3:

// Input: s = "a2345678999999999999999", k = 1
// Output: "a"
// Explanation: The decoded string is "a" repeated 8301530446056247680 times.
// The 1st letter is "a".

export const decodeAtIndex = (s: string, k: number): string => {
  let size: number = 0

  // Calc the size of dec str
  for (const l of s) {
    size = isNaN(+l) ? size + 1 : +l * size
  }

  // s = leet2code3
  // decodedS = leetleetcodeleetleetcodeleetleetcode, size = 36
  // k = 10
  // k = 10 % 36 => 10

  // step 1: k = 10, size = 12 (size /= 3), leet2code[3]
  // step 2: k = 10, size = 11, leet2cod[e]3
  // step 3: k = 10, size = 10, leet2co[d]e3
  // step 4: k = 0 => return leet2c[o]de3

  // Traverse the string backward to find the k-th character
  for (let i: number = s.length - 1; i >= 0; i--) {
    const l: string = s[i]
    k %= size

    if (k === 0 && isNaN(+l)) {
      return l
    } else if (!isNaN(+l)) {
      size /= +l
    } else {
      size--
    }
  }

  return s[1]
}
