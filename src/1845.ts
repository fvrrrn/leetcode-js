// 1845. Seat Reservation Manager
// Design a system that manages the reservation state of n seats that are numbered from 1 to n.
// Implement the SeatManager class:
// SeatManager(int n) Initializes a SeatManager object that will manage n seats numbered from 1 to n. All seats are initially available.
// int reserve() Fetches the smallest-numbered unreserved seat, reserves it, and returns its number.
// void unreserve(int seatNumber) Unreserves the seat with the given seatNumber.

// Example 1:
// Input
// ["SeatManager", "reserve", "reserve", "unreserve", "reserve", "reserve", "reserve", "reserve", "unreserve"]
// [[5], [], [], [2], [], [], [], [], [5]]
// Output
// [null, 1, 2, null, 2, 3, 4, 5, null]

// Explanation
// SeatManager seatManager = new SeatManager(5); // Initializes a SeatManager with 5 seats.
// seatManager.reserve();    // All seats are available, so return the lowest numbered seat, which is 1.
// seatManager.reserve();    // The available seats are [2,3,4,5], so return the lowest of them, which is 2.
// seatManager.unreserve(2); // Unreserve seat 2, so now the available seats are [2,3,4,5].
// seatManager.reserve();    // The available seats are [2,3,4,5], so return the lowest of them, which is 2.
// seatManager.reserve();    // The available seats are [3,4,5], so return the lowest of them, which is 3.
// seatManager.reserve();    // The available seats are [4,5], so return the lowest of them, which is 4.
// seatManager.reserve();    // The only available seat is seat 5, so return 5.
// seatManager.unreserve(5); // Unreserve seat 5, so now the available seats are [5].

// Constraints:
// 1 <= n <= 105
// 1 <= seatNumber <= n
// For each call to reserve, it is guaranteed that there will be at least one unreserved seat.
// For each call to unreserve, it is guaranteed that seatNumber will be reserved.
// At most 105 calls in total will be made to reserve and unreserve.

export class SeatManager {
  private seat: MinHeap<number>

  constructor(n: number) {
    this.seat = new MinHeap()
    for (let i = 1; i <= n; i++) {
      this.seat.push(i)
    }
  }

  reserve(): number {
    return this.seat.pop() as number
  }

  unreserve(seatNumber: number): void {
    this.seat.push(seatNumber)
  }
}

class MinHeap<T> {
  private heap: T[] = []

  push(el: T): void {
    const array = this.heap
    array.push(el)
    let child = array.length - 1
    let parent = (child - 1) >> 1

    while (array[child] < array[parent]) {
      this.swap(array, child, parent)
      child = parent
      parent = (child - 1) >> 1
    }
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined
    }

    const array = this.heap
    const target = array[0]
    this.swap(array, 0, array.length - 1)
    array.pop()

    let parent = 0

    // eslint-disable-next-line no-constant-condition
    while (true) {
      let child = parent * 2 + 1
      if (child >= array.length) break

      const rightChild = child + 1
      if (rightChild < array.length && array[rightChild] < array[child]) {
        child = rightChild
      }

      if (array[parent] <= array[child]) break

      this.swap(array, parent, child)
      parent = child
    }

    return target
  }

  swap(arr: T[], i: number, j: number) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  size() {
    return this.heap.length
  }

  isEmpty() {
    return this.heap.length === 0
  }
}
