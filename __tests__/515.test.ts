import { TreeNode, largestValues } from '../src/515.js'

it('returns [1,3,9] for tree=[1,3,2,5,3,null,9]', () => {
  const root = new TreeNode(1)
  root.left = new TreeNode(3)
  root.left.left = new TreeNode(5)
  root.left.right = new TreeNode(3)
  root.right = new TreeNode(2)
  root.right.right = new TreeNode(9)
  expect(largestValues(root)).toEqual([1, 3, 9])
})

it('returns [1,3] for tree=[1,2,3]', () => {
  const root = new TreeNode(1)
  root.left = new TreeNode(3)
  root.right = new TreeNode(2)
  expect(largestValues(root)).toEqual([1, 3])
})
