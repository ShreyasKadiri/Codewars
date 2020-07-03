"""
Task
Aliens send messages to our planet, but they use a very strange language. Try to decode the messages!

"""

import re
from collections import Counter

possibilities={
'|-|':'h',
'[-':'e',
'()':'o',
'3]':'b',
'_|':'l',
'|':'i',
'^|':'p',
'/`':'y',
')(':'o',
'?/':'r',
'\/':'a',
'|\|':'n',
'</':'k',
'~|~':'t',
'=/':'f',
')|':'d',
'|_|':'u',
'(':'c',
'-[':'e',
'~\_':'s',
'-[':'e',
']3':'b',
'_/~':'z',
'/\\/\\':'w',
'<>':'x',
'/\\':'v',
'|/\|':'m',
'_)(':'q',
'T_':'j',
',_(':'g',
'__':' '
}

#Using Regular Expressions
def decode(m):
    limiters=["]","}",".","'","+"]
    split=[i for i,j in Counter(m).most_common()][0]
    result=[]
    for f in re.split('('+re.escape(split)+')+', m[::-1]):
        try: result.append(possibilities[f])
        except: continue
    return ''.join(result)
