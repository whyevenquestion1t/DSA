// improved memoization uses closures

function memoizeAddTo80(n) {
    let cache = {};
    return function(n) {
        if (n in cache) {
            return cache[n];
        } else {
            console.log('long time')
            cache[n] = n + 80;
            return cache[n];
        }
    }
}

const memoized = memoizeAddTo80();

memoized(5)
memoized(5)