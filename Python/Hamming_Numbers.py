"""
A Hamming number is a positive integer of the form 2i3j5k, for some non-negative integers i, j, and k.

Write a function that computes the nth smallest Hamming number.

Specifically:

The first smallest Hamming number is 1 = 203050
The second smallest Hamming number is 2 = 213050
The third smallest Hamming number is 3 = 203150
The fourth smallest Hamming number is 4 = 223050
The fifth smallest Hamming number is 5 = 203051
The 20 smallest Hamming numbers are given in example test fixture.

Your code should be able to compute all of the smallest 5,000 (Clojure: 2000) Hamming numbers without timing out.

"""
#Use Dp
def hamming(n):
    hamming=[0]*n
    hamming[0]=1
    i2=0
    i3=0
    i5=0
  
    nm2=2
    nm3=3
    nm5=5
  
    for j in range(1,n): 
        hamming[j]=min(nm2,nm3,nm5) 
        
        if hamming[j]==nm2: 
            i2+=1
            nm2=hamming[i2]*2
  
        if hamming[j]==nm3: 
            i3+=1
            nm3=hamming[i3] * 3
  
        if hamming[j]==nm5:  
            i5+=1
            nm5=hamming[i5] * 5

    return hamming[-1] 
