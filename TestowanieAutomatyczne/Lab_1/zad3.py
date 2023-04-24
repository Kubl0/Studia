from pickle import FALSE


def is_pangram(word):
    
    alfabet = 'abcdefghijklmnopqrstuvwxyz'

    for char in alfabet:
        if char not in word.lower():
            return False
    
    return True
