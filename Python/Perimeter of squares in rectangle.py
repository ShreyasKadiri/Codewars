"""
The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of 
these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80
Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same 
manner as in the drawing:


"""


def perimeter(n):
    sum=2
    p1=p2=1
    for i in range(2, n+1):
        temp=p2
        p2=p1+p2
        p1=temp
        sum+=p2
    return 4 * sum if n > 1 else 1