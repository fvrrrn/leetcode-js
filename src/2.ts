// 2. Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
declare class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null)
}

export const addTwoNumbers = function (l1: ListNode, l2: ListNode): ListNode {
  if (!l1 || !l2) return null

  const l3 = new ListNode()
  let current1 = l1
  let current2 = l2
  let current3 = l3
  let carry = 0

  while (current1) {
    const sum = current1.val + current2.val + carry
    if (sum < 10) {
      current3.val = sum
      carry = 0
    } else {
      current3.val = sum - 10
      carry = 1
    }

    if (!current1.next && !current2.next) {
      if (carry > 0) {
        current3.next = new ListNode(carry)
      }
      break
    }
    current1 = current1.next || new ListNode()
    current2 = current2.next || new ListNode()
    current3.next = new ListNode()
    current3 = current3.next
  }

  return l3
}
