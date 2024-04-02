"use strict";

function quickSort(array, start = 0, end = array.length - 1) {
  if (start < end) {
    const pivot_index = partition(array, start, end);
    quickSort(array, start, pivot_index - 1);
    quickSort(array, pivot_index + 1, end);
  }

  return array;
}

function partition(array, start, end) {
  const pivot = array[end];
  let i = start - 1;

  for (let j = start; j < end; j++) {
    if (array[j] <= pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  const pivot_index = i + 1;
  [array[pivot_index], array[end]] = [array[end], array[pivot_index]];

  return pivot_index;
}

let array = [4, 6, 1, 2, 1, 6, 3, 3, 3, 6, 26, 1, 2, 19];
console.log(quickSort(array));
