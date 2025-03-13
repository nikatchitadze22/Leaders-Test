# Problem 5: Check if Two Strings are Anagrams - 5ქ
# Challenge:
#  Write a function to check if two strings are anagrams (contain the same characters in the same frequency).
# Instructions:
# Input: Two strings (e.g., "listen" and "silent").
# Output: A boolean (True or False) indicating if the strings are anagrams.
# Test Cases:
# are_anagrams("listen", "silent") == True
# are_anagrams("hello", "world") == False
# are_anagrams("triangle", "integral") == True


def are_anagrams(word1, word2):
    print(sorted(word1) == sorted(word2))


are_anagrams("listen", "silent")   #== True
are_anagrams("hello", "world")   #== False
are_anagrams("triangle", "integral")   # == True