# frozen_string_literal: true

class MinHeap
  attr_accessor :heap

  def initialize
    @heap = []
  end

  def insert(value)
    @heap << value
    bubble_up(@heap.length - 1)
  end

  def extract
    return @heap.pop if @heap.length <= 1

    min = @heap[0]
    @heap[0] = @heap.pop
    sink_down(0)

    min
  end

  private

  def bubble_up(index)
    parent_index = (index - 1) / 2

    return if index <= 0 || @heap[parent_index] <= @heap[index]

    @heap[index], @heap[parent_index] = @heap[parent_index], @heap[index]
    bubble_up(parent_index)
  end

  def sink_down(index) # rubocop:disable Metrics/AbcSize
    left_child_index = (index * 2) + 1
    right_child_index = left_child_index + 1

    smallest = index
    smallest = left_child_index if left_child_index < @heap.length && @heap[left_child_index] < @heap[smallest]
    smallest = right_child_index if right_child_index < @heap.length && @heap[right_child_index] < @heap[smallest]

    return unless smallest != index

    @heap[index], @heap[smallest] = @heap[smallest], @heap[index]
    sink_down(smallest)
  end
end

min_heap = MinHeap.new
[8, 5, 1, 14, 9, 12, 13, 17, 15, 21].each do |number|
  min_heap.insert(number)
end

puts "Heap before extracting min #{min_heap.heap.compact.join(',')}"
7.times do
  puts "Extracted min: #{min_heap.extract}"
  puts "Heap after extracting min #{min_heap.heap.compact.join(',')}"
end
