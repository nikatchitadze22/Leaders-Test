def pascal_to_snake(s):
    result = ""
    
    for i, char in enumerate(s):
        if char.isupper() and i > 0:
            result += '_' + char.lower()
        else:
            result += char.lower()
    
    return result