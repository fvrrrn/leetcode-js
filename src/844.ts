// 844. Backspace String Compare
// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
// Note that after backspacing an empty text, the text will continue empty.

// Example 1:
// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

// Example 2:
// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".

// Example 3:
// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".

// Constraints:
// 1 <= s.length, t.length <= 200
// s and t only contain lowercase letters and '#' characters.

// Follow up: Can you solve it in O(n) time and O(1) space?

export const backspaceCompare = (s: string, t: string): boolean => {
  let backspaceCountS = 0
  let backspaceCountT = 0
  let i = s.length - 1
  let j = t.length - 1
  while (i >= 0 || j >= 0) {
    if (s[i] === '#') {
      --i
      ++backspaceCountS
    } else if (t[j] === '#') {
      --j
      ++backspaceCountT
    } else if (backspaceCountS > 0) {
      --i
      --backspaceCountS
    } else if (backspaceCountT > 0) {
      --j
      --backspaceCountT
    } else if (s[i--] !== t[j--]) {
      return false
    }
  }
  return true
}
