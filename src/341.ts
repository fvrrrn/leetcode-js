// 341. Flatten Nested List Iterator
// You are given a nested list of integers nestedList. Each element is either an integer or a list whose elements may also be integers or other lists. Implement an iterator to flatten it.
// Implement the NestedIterator class:
// NestedIterator(List<NestedInteger> nestedList) Initializes the iterator with the nested list nestedList.
// int next() Returns the next integer in the nested list.
// boolean hasNext() Returns true if there are still some integers in the nested list and false otherwise.
// Your code will be tested with the following pseudocode: initialize iterator with nestedList
// res = []
// while iterator.hasNext()
//     append iterator.next() to the end of res
// return res
// If res matches the expected flattened list, then your code will be judged as correct.

// Example 1:
// Input: nestedList = [[1,1],2,[1,1]]
// Output: [1,1,2,1,1]
// Explanation: By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,1,2,1,1].

// Example 2:
// Input: nestedList = [1,[4,[6]]]
// Output: [1,4,6]
// Explanation: By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,4,6].

// Constraints:
// 1 <= nestedList.length <= 500
// The values of the integers in the nested list is in the range [-106, 106].

// This is the interface that allows for creating nested lists.
// You should not implement it, or speculate about its implementation
declare class NestedInteger {
  // If value is provided, then it holds a single integer
  // Otherwise it holds an empty nested list
  constructor(value?: number)

  // Return true if this NestedInteger holds a single integer, rather than a nested list.
  isInteger(): boolean

  // Return the single integer that this NestedInteger holds, if it holds a single integer
  // Return null if this NestedInteger holds a nested list
  getInteger(): number | null

  // Set this NestedInteger to hold a single integer equal to value.
  setInteger(value: number): void

  // Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
  add(elem: NestedInteger): void

  // Return the nested list that this NestedInteger holds,
  // or an empty list if this NestedInteger holds a single integer
  getList(): NestedInteger[]
}

class LinkedListNode<T> {
  value: T
  prev: LinkedListNode<T>
  constructor(value: T) {
    this.value = value
    this.prev = null
  }
}

class Stack<T> {
  private _top: LinkedListNode<T>
  private _count: number

  public push(value: T): void {
    const temp = new LinkedListNode(value)
    temp.prev = this._top
    this._top = temp
    this._count++
  }

  get count(): number {
    return this.count
  }

  public pop(): T {
    if (this._top == null) {
      return null
    }
    const value = this._top.value
    this._top = this._top.prev
    this._count--
    return value
  }
}

export class NestedIterator {
  private stack: Stack<number>

  constructor(nestedList: NestedInteger[]) {
    this.flatten(nestedList)
    this.stack = new Stack()
  }

  private flatten(nestedList: NestedInteger[]): void {
    let n: NestedInteger
    while ((n = nestedList.pop())) {
      if (n.isInteger()) this.stack.push(n.getInteger())
      else this.flatten(n.getList())
    }
  }

  public hasNext(): boolean {
    return !!this.stack.count
  }

  public next(): number {
    return this.stack.pop()
  }
}
