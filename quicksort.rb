# frozen_string_literal: true

def quicksort(arr, low = 0, high = arr.length - 1)
  if low < high
    pivot_index = arrange(arr, low, high)
    quicksort(arr, low, pivot_index - 1)
    quicksort(arr, pivot_index + 1, high)
  end

  arr
end

def arrange(arr, low, high) # rubocop : disable Metrics/MethodLength
  pivot = arr[high]
  i = low - 1

  (low..high - 1).each do |j|
    if arr[j] > pivot
      i += 1
      arr[j], arr[i] = arr[i], arr[j]
    end
  end
  pivot_index = i + 1
  arr[high], arr[pivot_index] = arr[pivot_index], arr[high]

  pivot_index
end

puts quicksort([3, 5, 1, 1, 60, 3, 2, 1, 1, 5, 6, 54]).join(',')
