# Problem 8: Longest Consecutive Sequence - 8ქ
# Challenge:
#  Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
# Instructions:
# Input: A list of integers (e.g., [100, 4, 200, 1, 3, 2]).
# Output: The length of the longest consecutive sequence (e.g., 4).
# Test Cases:
# assert longest_consecutive([100, 4, 200, 1, 3, 2]) == 4  # [1, 2, 3, 4]
# assert longest_consecutive([0, 0]) == 1
# assert longest_consecutive([9, 1, 4, 7, 3, 2, 8, 5, 6]) == 9



def longest_consecutive_sequence(nums):
    if not nums:
        return 0
    unique_nums = set(nums)
    longest_length = 0
    for number in unique_nums:
        if number - 1 not in unique_nums:
            current_number = number
            streak_length = 1
            while current_number + 1 in unique_nums:
                current_number += 1
                streak_length += 1
            longest_length = max(longest_length, streak_length)
    print(longest_length)


longest_consecutive_sequence([9, 1, 4, 7, 3, 2, 8, 5, 6])  # Should print 9
longest_consecutive_sequence([0, 0])  # Should print 1
longest_consecutive_sequence([100, 4, 200, 1, 3, 2])  # Should print 4
