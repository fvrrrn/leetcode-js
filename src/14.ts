// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

export const longestCommonPrefix = (strs: string[]): string => {
  let firstWord = strs[0]
  let lastWord = strs[strs.length - 1]
  for (let i = 0; i < strs.length; i++) {
    if (strs[i] < firstWord) firstWord = strs[i]
    if (strs[i] > lastWord) lastWord = strs[i]
  }

  const output = []
  for (let i = 0; i < firstWord.length; i++) {
    if (firstWord[i] == lastWord[i]) {
      output.push(firstWord[i])
    } else {
      break
    }
  }

  return output.join('')
}
