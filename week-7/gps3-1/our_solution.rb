# U3.W7: Build an Electronic Grocery List! (in Ruby)

# Your full names:
# 1.
# 2.

# User Stories (As many as you want. Delete the statements you don't need)
# As a user, I want to display the list.
# As a user, I want to add stuff.
# As a user, I want to remove stuff.
# As a user, I want to see the quantity of stuff.
# As a user, I want to see the price of the stuff.

# Pseudocode
# Class List
#  prop: empty array - has contents array
#  methods:
#    display -
#    add -
#    remove -
# Class Item
#  name -
#  quantity -
#  price -
#  location -


# Your fabulous code goes here....
class List
  attr_reader :name, :list_contents

  def initialize(name)
    @list_contents = []
    @name = name
  end

  def display
    @list_contents.each {|list_item|
      puts "Name: #{list_item.name}, Quantity: #{list_item.quantity}, Price: #{list_item.price}, Location: #{list_item.location}"
    }
  end

  def add(item)
    @list_contents.push(item)
  end

  def remove(item)
    to_remove = @list_contents.find {|i| i.name == item.name}
    @list_contents.delete(to_remove)
  end

  def total_cost
    total_price = 0

    @list_contents.each do |item|

      total_price += (item.quantity * item.price)

    end
    return total_price
  end

end


class Item
  attr_reader :name, :quantity, :price, :location

  def initialize(name, quantity, price, location)
    @name = name
    @quantity = quantity
    @price = price
    @location = location
  end

end


# DRIVER CODE GOES HERE.

list1 = List.new("Raj")
item1 = Item.new("banana",15,0.5,"Trader Joe's")
item2 = Item.new("strawberry",1,3,"Costco")
list1.add(item1)
list1.add(item2)
list1.display
list1.remove(item2)
list1.display
puts list1.total_cost


# puts list1.list_contents
# puts list1.name


# Reflection
# I had an awesome time with both Raj and Paulo. We hammered through the challenge. It took us a while to get use to ruby syntax again, but once we got rolling it came back pretty fast. I had some hiccups in confusing ruby and JS but we caught our mistakes early on before it compounded too much. Cool GPS!