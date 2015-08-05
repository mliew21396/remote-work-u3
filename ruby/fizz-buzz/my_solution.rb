# U3.W8-9:

# I worked on this challenge [by myself, with: ].
# This challenge took me [#] hours.


# Pseudocode
# loop through each index of the array
  # if value modulus 15 is 0, change value to FizzBuzz
  # if value modulus 3 is 0, change value to Fizz
  # if value modulus 5 is 0, change value to Buzz
  #else do nothing
# return array


# Initial Solution
# def super_fizzbuzz(array)
#   solution_array = []
#   array.each_with_index { |value,index|
#     if (value%15 == 0)
#       solution_array << "FizzBuzz"
#     elsif value%5 == 0
#       solution_array << "Buzz"
#     elsif value%3 == 0
#       solution_array <<"Fizz"
#     else
#       solution_array << value
#     end
#   }
#   return solution_array
# end

# Refactored Solution
def super_fizzbuzz(array)
  solution_array = []
  array.each_with_index { |value,index|
    if (value%15 == 0)
      solution_array << "FizzBuzz"
    elsif value%5 == 0
      solution_array << "Buzz"
    elsif value%3 == 0
      solution_array <<"Fizz"
    else
      solution_array << value
    end
  }
  return solution_array
end

# DRIVER TESTS GO BELOW THIS LINE
p super_fizzbuzz([1,2,3])  # => [1, 2, "Fizz"]
 p super_fizzbuzz([1,2,5])  # => [1, 2, "Buzz"]
p super_fizzbuzz([1,2,15])

# Reflection