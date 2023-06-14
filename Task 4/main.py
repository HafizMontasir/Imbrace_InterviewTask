def findDuplicates(arr):
    duplicates = []
    seen = set()
    for num in arr:
        if num in seen and num not in duplicates:
            duplicates.append(num)
        else:
            seen.add(num)
    return duplicates