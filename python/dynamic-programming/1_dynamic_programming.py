def add_to_80(n):
    print('long time')
    return n + 80


add_to_80(5)

cache = {}


def memoize_add_to_80(n):
    if n in cache:
        return cache[n]
    else:
        print('long time')
        cache[n] = n + 80
        return cache[n]
