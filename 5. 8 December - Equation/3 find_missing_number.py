# Problem 3: Find the Missing Number - 2ქ
# Challenge:
#  Create a function to find the missing number in a list of integers from 1 to n.
# Instructions:
# Input: A list of integers from 1 to n with one number missing (e.g., [1, 2, 4, 5]).
# Output: The missing number (e.g., 3 in this case).
# Test Cases:
# assert find_missing_number([1, 2, 4, 5]) == 3
# assert find_missing_number([3, 5, 6, 1, 2]) == 4
# assert find_missing_number([2]) == 1


def find_missing_number(numbers):
    n = len(numbers) + 1
    expected_sum = 0
    for i in range(1, n + 1):
        expected_sum += i
    actual_sum = 0
    for num in numbers:
        actual_sum += num
    print(expected_sum - actual_sum)


find_missing_number([1, 2, 4, 5])
find_missing_number([3, 5, 6, 1, 2]) 
find_missing_number([2]) 