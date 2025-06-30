function addTo80(n) {
    console.log('long time')
    return n + 80;
}

addTo80(5)

let cache = {};

function memoizeAddTo80(n) {
    if (n in cache) {
        return cache[n];
    } else {
        console.log('long time')
        cache[n] = n + 80;
        return cache[n];
    }
}