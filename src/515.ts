// 515. Find Largest Value in Each Tree Row
// Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).

// Example 1:
// Input: root = [1,3,2,5,3,null,9]
// Output: [1,3,9]

// Example 2:
// Input: root = [1,2,3]
// Output: [1,3]

// Constraints:
// The number of nodes in the tree will be in the range [0, 104].
// -231 <= Node.val <= 231 - 1
// Given a binary tree. Print its nodes
// in level order using array for implementing queue

class LinkedListNode<T> {
  value: T
  next: LinkedListNode<T>
  constructor(value: T) {
    this.value = value
  }
}

export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

export const largestValues = (root: TreeNode | null): number[] => {
  if (root == null) return []
  if (root.left == null && root.right == null) return [root.val]

  const listRoot = new LinkedListNode(root)
  const maxes = []

  let currentRoot = listRoot
  let flag = true
  while (flag) {
    flag = false
    let current = currentRoot
    let max = currentRoot.value.val
    for (let i = 0; current != null; i++) {
      if (i === 0) currentRoot = current

      // find max
      max = max < current.value.val ? current.value.val : max
      if (current?.value.left && current?.value.right) {
        /**
         * replace current node with its children
         * tree piece:
         * 2
         * | \
         * 1   4 are linked list nodes
         * |\  |\
         * 2 3 7 8
         */

        // Example:
        // a) 1 -> 4
        // b) 2 -> 4
        const node = new LinkedListNode(current.value.right)
        current.value = current.value.left
        const oldNext = current.next
        // c) 2 -> 3 -> 4
        node.next = oldNext
        current.next = node
        current = node.next

        flag = true

        continue
      }

      if (current?.value.left) {
        current.value = current.value.left
        flag = true
      }

      if (current?.value.right) {
        current.value = current.value.right
        flag = true
      }

      current = current?.next
    }

    maxes.push(max)
  }

  return maxes
}
