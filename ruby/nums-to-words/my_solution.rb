# U3.W8-9: Numbers to English Words


# I worked on this challenge [by myself, with: ].
# This challenge took me [#] hours.


# Pseudocode
# Create num_array
# Iterate through hundreds
    # push into num_array translation
      # have translation method
    # take reminder of num modulus 100 as num
# Iterate through tens
    # push into num_array translation
      # have translation method
    # take reminder of num modulus 10 as num
# Iterate through single digits
    # push into num_array translation
      # have translation method

# Initial Solution
def num_to_english (num) #Only 3 digit numbers
  num_array = []
  if num/100 > 0
    first_half = (num/100).floor
    first_half = translator_num_to_eng_sml(first_half)
    num_array << first_half+" hundred"
    num = num%100
  end
  if num/10 > 0
    num_array << translator_num_to_eng_med(num)
    num = num%10
  end
  if num > 0
    num_array << translator_num_to_eng_sml(num)
  end
  num_array = num_array.join(" ")
  return num_array

  # if num.to_s.length == 2
  #   num_array.unshift(translator_num_to_eng_med(num))
  # end
  # # if num%10 == 0
  # #   num_array.unshift("ten")
  # #   num = num / 10
  # # end
  # if num/100 > 0
  #   num_array.unshift ("hundred")
  #   num = num/100
  # end
  # num_array.unshift(translator_num_to_eng_sml(num))
  # p num_array
  # num_array.join(" ")
end
def translator_num_to_eng_med(two_digit_num)
  case
  when two_digit_num - 90 >= 0
    return "ninety"
  when two_digit_num - 80 >= 0
    return "eighty"
  when two_digit_num - 70 >= 0
    return "seventy"
  when two_digit_num - 60 >= 0
    return "sixty"
  when two_digit_num - 50 >= 0
    return "fifty"
  when two_digit_num - 40 >= 0
    return "forty"
  when two_digit_num - 30 >= 0
    return "thirty"
  when two_digit_num - 20 >= 0
    return "twenty"
  when two_digit_num%19 == 0
    return "nineteen"
  when two_digit_num%18 == 0
    return "eighteen"
  when two_digit_num%17 == 0
    return "seventeen"
  when two_digit_num%16 == 0
    return "sixteen"
  when two_digit_num%15 == 0
    return "fifteen"
  when two_digit_num%14 == 0
    return "fourteen"
  when two_digit_num%13 == 0
    return "thirteen"
  when two_digit_num%12 == 0
    return "twelve"
  when two_digit_num%11 == 0
    return "eleven"
  when two_digit_num%10 == 0
    return "ten"
  end

end
def translator_num_to_eng_sml(num)
  case num
  when 1
    return "one"
  when 2
    return "two"
  when 3
    return "three"
  when 4
    return "four"
  when 5
    return "five"
  when 6
    return "six"
  when 7
    return "seven"
  when 8
    return "eight"
  when 9
    return "nine"
  end
end

#Accidentally did english to number first, but keeping this here for good practice
def english_to_num(word_num)
  final_solution = 0;
  rev_num_array = []
  str_array = word_num.split(" ")
  str_array.each { |word|
    rev_num_array.unshift(translator_eng_to_num(word))
  }
  rev_num_array.each_with_index { |value, index|
    if value == 100
      return final_solution += (value * rev_num_array[index+1])
    else
      final_solution += value
    end
  }
  return final_solution
end
def translator_eng_to_num(word)
  case word
  when "one"
    return 1
  when "two"
    return 2
  when "three"
    return 3
  when "four"
    return 4
  when "five"
    return 5
  when "six"
    return 6
  when "seven"
    return 7
  when "eight"
    return 8
  when "nine"
    return 9
  when "ten"
    return 10
  when "eleven"
    return 11
  when "twelve"
    return 12
  when "thirteen"
    return 13
  when "fourteen"
    return 14
  when "fifteen"
    return 15
  when "sixteen"
    return 16
  when "seventeen"
    return 17
  when "eighteen"
    return 18
  when "nineteen"
    return 19
  when "twenty"
    return 20
  when "thirty"
    return 30
  when "forty"
    return 40
  when "fifty"
    return 50
  when "sixty"
    return 60
  when "seventy"
    return 70
  when "eighty"
    return 80
  when "ninety"
    return 90
  when "hundred"
    return 100
  end
end

# Refactored Solution
# See above





# DRIVER TESTS GO BELOW THIS LINE
# p english_to_num("nine hundred ninety nine")
p num_to_english(900)
p num_to_english(990)
p num_to_english(999)
p num_to_english(283)





# Reflection