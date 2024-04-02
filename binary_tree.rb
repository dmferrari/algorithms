# frozen_string_literal: true

class Node
  attr_accessor :left, :right
  attr_reader :value

  def initialize(value)
    @left = nil
    @value = value
    @right = nil
  end
end

class BinarrayTree
  attr_reader :root

  def initialize
    @root = nil
  end

  def insert(value)
    return unless value

    if @root
      insert_node(@root, value)
    else
      @root = Node.new(value)
    end
  end

  def find(value)
    find_node(@root, value)
  end

  def traverse
    array = []
    in_order_traversal(@root, array)

    array
  end

  private

  def insert_node(node, value)
    return Node.new(value) unless node

    if value < node.value
      node.left = insert_node(node.left, value)
    else
      node.right = insert_node(node.right, value)
    end

    node
  end

  def find_node(node, value)
    return unless node
    return node if node.value == value

    value < node.value ? find_node(node.left, value) : find_node(node.right, value)
  end

  def in_order_traversal(node, array)
    return unless node

    in_order_traversal(node.left, array)
    array << node.value
    in_order_traversal(node.right, array)
  end
end

bt = BinarrayTree.new
1000.times do
  bt.insert(rand(0..10_000))
end

NUMBER = 37
bt.insert(NUMBER)

puts bt.traverse.join(',')
puts bt.find(NUMBER)
