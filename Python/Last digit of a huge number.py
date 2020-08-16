def last_digit(lst):
    i=1
    for j in reversed(lst):
        i= j** (i if i<4 else i%4+4)
    return i%10
