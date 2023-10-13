// 20. Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Constraints:
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

class LinkedListNode<T> {
  value: T
  prev: LinkedListNode<T>
  constructor(value: T) {
    this.value = value
    this.prev = null
  }
}

class Stack<T> {
  top: LinkedListNode<T>

  public push(value: T): void {
    const temp = new LinkedListNode(value)
    temp.prev = this.top
    this.top = temp
  }

  public pop(): T {
    if (this.top == null) {
      return null
    }
    const value = this.top.value
    this.top = this.top.prev
    return value
  }
}

export const isValid = (s: string): boolean => {
  const map = { '(': ')', '{': '}', '[': ']' }
  const stack = new Stack<string>()

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) stack.push(map[s[i]])
    else {
      if (stack.pop() !== s[i]) return false
    }
  }

  return stack.top == null
}
