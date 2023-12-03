// 3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

export const lengthOfLongestSubstring = (s: string): number => {
  const table = { [s[0]]: 0 }
  let count = 0

  let v: number
  for (let left = 0, right = 1; right < s.length; ) {
    count = right - left > count ? right - left : count
    v = table[s[right]]
    if (v >= left) {
      // if (d > 1) {
      // }
      left = v + 1
      right = left + 1
    } else {
      right++
    }
    table[s[right]] = right
  }
  return count + 1
}