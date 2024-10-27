def remove_duplicates(lst):
    unique_elements = []
    for item in lst:
        if item not in unique_elements:
            unique_elements.append(item)
    return unique_elements
print(remove_duplicates([1,2,3,3,4,5,4,6,7,7,7]))