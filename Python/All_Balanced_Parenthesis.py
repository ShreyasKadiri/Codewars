"""
Write a function which makes a list of strings representing all of the ways you can balance n pairs of parentheses

Examples
balanced_parens(0) => [""]
balanced_parens(1) => ["()"]
balanced_parens(2) => ["()()","(())"]
balanced_parens(3) => ["()()()","(())()","()(())","(()())","((()))"]
 """

def balanced_parens(n):
    table=[['']]
    for j in range(1,n+1):
        result=[]
        for i in range(j):
            for x in table[i]:
                for y in table[j-i-1]:
                    result.append('('+x+')'+y)
        table.append(result)
    return table[n]
