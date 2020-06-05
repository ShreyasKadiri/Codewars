"""
The year is 1214. One night, Pope Innocent III awakens to find the the archangel Gabriel floating before him. Gabriel thunders to the pope:
Gather all of the learned men in Pisa, especially Leonardo Fibonacci. In order for the crusades in the holy lands to be successful, 
these men must calculate the millionth number in Fibonacci's recurrence. Fail to do this, and your armies will never reclaim the holy land. It is His will.
The angel then vanishes in an explosion of white light.Pope Innocent III sits in his bed in awe. How much is a million? he thinks to himself. 
He never was very good at math.He tries writing the number down, but because everyone in Europe is still using Roman numerals at this moment in history, '
he cannot represent this number. If he only knew about the invention of zero, it might make this sort of thing easier.
He decides to go back to bed. He consoles himself, The Lord would never challenge me thus; this must have been some deceit by the devil.
 A pretty horrendous nightmare, to be sure Pope Innocent III's armies would go on to conquer Constantinople (now Istanbul), but they would never reclaim the holy land as he desired.
"""


def calc(num):
    if num == 0:
        return (0,1)
    elif num == 1:
        return (1,1)
    else:
        a,b =calc(num // 2)
        p=a*(2*b-a)
        q=b*b+a*a
        return (p,q) if num % 2==0 else (q,p+q)

def fib(num):
    if num >= 0:
        return calc(num)[0]
    else:
        return -calc(-num)[0] if num % 2 ==0 else calc(-num)[0]
