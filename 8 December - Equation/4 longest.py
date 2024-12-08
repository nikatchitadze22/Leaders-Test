# Problem 4: Longest Substring Without Repeating Characters - 5ქ
# Challenge:
#  Create a function that finds the length of the longest substring without repeating characters.
# Instructions:
# Input: A string (e.g., "abcabcbb").
# Output: An integer representing the length of the longest substring (e.g., 3 for "abc").
# Test Cases:
# assert longest_unique_substring("abcabcbb") == 3
# assert longest_unique_substring("bbbbb") == 1
# assert longest_unique_substring("") == 0
# assert longest_unique_substring("pwwkew") == 3


def longest_unique_substring(str):
    max_length = 0
    for i in range(len(str)):
        chars = set()
        for char in range(i, len(str)):
            if str[char] in chars:
                break
            chars.add(str[char])
        max_length = max(max_length, char - i)
    print(max_length)


longest_unique_substring("abcabcbb") == 3
longest_unique_substring("bbbbb") == 1
longest_unique_substring("") == 0
longest_unique_substring("pwwkew") == 3