"""
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

Please note that using encode is considered cheating.
"""

def rot13(message):
    encryptedMessage=""
    
    if message:
        for c in message:
            if 65 <= ord(c)<= 90 or 97<=ord(c)<=122:
                if 65<=ord(c)<=90:
                    # capitlized case
                    if ord(c)+13>90:
                        c=chr(ord(c)+13-90+65-1)
                    else:
                        c=chr(ord(c)+13)
                else:
                    # lowercase
                    if ord(c)+13>122:
                        c=chr(ord(c)+13-122+97-1)
                    else:
                        c=chr(ord(c)+13)
            else:
                pass
            encryptedMessage+=c
    return encryptedMessage
