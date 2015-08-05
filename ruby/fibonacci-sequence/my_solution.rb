# U3.W8-9:


# I worked on this challenge [by myself, with: ].
# This challenge took me [#] hours.

# Pseudocode
# define array of 1 and 1
# set solution to zero
# while loop for solution equaling zero
  # have a new variable be set when adding the last two values of the array
  #push the sum of the last two values into the array
  # conditional to check if the last array number is equal to the input
    # if true, then that's true
    # if false, return false


# Initial Solution

# def is_fibonacci?(num)
#   fib_array = [1,1]
#   solution = 0;
#   while (solution == 0)
#     first_num = fib_array[-2]
#     second_num = fib_array[-1]
#     new_num = first_num + second_num
#     fib_array << new_num
#     if (fib_array[-1]==num)
#       solution = num;
#       p fib_array
#       return true
#     elsif (fib_array[-1]>num)
#       p fib_array
#       return false
#     end
#   end
# end



# Refactored Solution
def is_fibonacci?(num)
  fib_array = [1,1]
  solution = 0;
  while (solution == 0)
    new_num = fib_array[-2] + fib_array[-1]
    fib_array << new_num
    if (fib_array[-1]==num)
      solution = num;
      return true
    elsif (fib_array[-1]>num)
      return false
    end
  end
end

# DRIVER TESTS GO BELOW THIS LINE






# Reflection
#This was a pretty easy challenge, that took me a while to think of but busted out once i had an idea in mind. I would recommend this challenge.