"""
Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]



"""

#Basically to traverse in spiral order
def snail(snail_map):
    path=[]
    while len(snail_map) > 0:
        # go right
        path+=snail_map[0]
        del snail_map[0]


        if len(snail_map) > 0:
            # go down
            for i in snail_map:
                path+=[i[-1]]
                del i[-1]

            # go left
            if snail_map[-1]:
                path+=snail_map[-1][::-1]
                del snail_map[-1]

            # go top
            for i in reversed(snail_map):
                path+=[i[0]]
                del i[0]

    return path
