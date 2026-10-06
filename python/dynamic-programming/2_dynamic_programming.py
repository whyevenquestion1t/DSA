# improved memoization uses closures


def memoize_add_to_80():
    cache = {}

    def inner(n):
        if n in cache:
            return cache[n]
        else:
            print('long time')
            cache[n] = n + 80
            return cache[n]

    return inner


memoized = memoize_add_to_80()

memoized(5)
memoized(5)
