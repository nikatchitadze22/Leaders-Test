def is_palindrome(s):
    cleaned = ""
    for char in s:
        if char.isalnum():
            cleaned += char.lower()
    return cleaned == cleaned[::-1]
print(is_palindrome("nigger"))