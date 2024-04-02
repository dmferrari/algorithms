"use strict";

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  extract() {
    if (this.heap.length <= 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    return min;
  }

  bubbleUp(index) {
    const parentIndex = Math.floor((index - 1) / 2);
    if (index <= 0 || this.heap[parentIndex] <= this.heap[index]) return;

    [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
    this.bubbleUp(parentIndex);
  }

  sinkDown(index) {
    const leftChildIndex = index * 2 + 1;
    const rightChildIndex = leftChildIndex + 1;
    let smallest = index;

    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]) {
      smallest = leftChildIndex;
    }

    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
      smallest = rightChildIndex;
    }

    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      this.sinkDown(smallest);
    }
  }
}

// Demonstrating usage
const minHeap = new MinHeap();
[8, 5, 1, 14, 9, 12, 13, 17, 15, 21].forEach(number => minHeap.insert(number));

console.log(`Heap before extracting min: [${minHeap.heap.join(", ")}]`);
for (let x = 0; x < 7; x++) {
  console.log(`Extracted min: ${minHeap.extract()}`);
  console.log(`Heap after extracting min: [${minHeap.heap.join(", ")}]`);
}
