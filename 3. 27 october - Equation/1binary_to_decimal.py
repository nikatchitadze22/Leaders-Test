def binary_to_decimal(binary_str):
    decimal = 0
    for index, digit in enumerate(reversed(binary_str)):
        if digit == '1':
            decimal += 2 ** index
    return decimal
print(binary_to_decimal("10001"))