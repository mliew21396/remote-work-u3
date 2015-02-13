# U3.W8-9: Triangle Debugger


# I worked on this challenge [by myself, with: ].
# This challenge took me [#] hours.


# Original Solution

def valid_triangle?(a, b, c, sum)
  if a != 0 || b != 0 || c != 0
  if a >= b
  largest = a
  sum += b
  else largest = b
  sum += a
  end
  if c > largest
  sum += largest
  largest = c
  else sum += c
  if sum > largest
  return "true"
  else return "false"
  end
  else return false
  end
end

p valid_triangle?
p valid_triangle?(1,4,7, 8)
p valid_triangle?(2,2,10, 15)


# Answer the question for each bug

# --- Bug 1 ---
# * what is the exact description of the error?
# * what is the exact line number the error is appearing?
# * before you fix the bug, what do you think is causing the error?

# --- Bug 2 ---
# * what is the exact description of the error?
# * what is the exact line number the error is appearing?
# * before you fix the bug, what do you think is causing the error?

# --- Bug 3 ---
# * what is the exact description of the error?
# * what is the exact line number the error is appearing?
# * before you fix the bug, what do you think is causing the error?


# Refactored Solution (Comment the other code to run this)







# Reflection