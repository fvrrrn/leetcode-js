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
  const result: number[] = []
  let queue = root ? [root] : []
  while (queue.length > 0) {
    const next = []
    let max = -Infinity
    for (const node of queue) {
      if (node.val > max) max = node.val
      if (node.left) next.push(node.left)
      if (node.right) next.push(node.right)
    }
    result.push(max)
    queue = next
  }
  return result
}
