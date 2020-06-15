"""
An integer partition of n is a weakly decreasing list of positive integers which sum to n.

For example, there are 7 integer partitions of 5:

[5], [4,1], [3,2], [3,1,1], [2,2,1], [2,1,1,1], [1,1,1,1,1].

Write a function named partitions which returns the number of integer partitions of n. The function should be able to find the number
 of integer partitions of n for n as least as large as 100.


"""

def partitions(n):
    p=[[1]*(n+1)]
    for i in range(1,n+1):
        p.append([0])
        for j in range(1,i+1):
            t=p[i-j][i-j] if j>i-j else p[i-j][j]
            p[i].append(p[i][j-1]+t)
    return p[n][n]
