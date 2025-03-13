def decimal_to_binary(decimal_num):
    if decimal_num == 0:
        return "0"
    
    binary = ""
    while decimal_num > 0:
        binary = str(decimal_num % 2) + binary
        decimal_num //= 2
    return binary
print(decimal_to_binary(17))