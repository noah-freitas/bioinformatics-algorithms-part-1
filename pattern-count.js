// patternCount :: String, String -> Number
function patternCount(text, pattern) {
    return text.split('').reduce(countOccurences.bind(null, pattern), 0);
}

// countOccurences :: String, Number, String, Number, [String] -> Number
function countOccurences(pattern, count, c, i, a) {
    return a.slice(i, pattern.length + i).join('') === pattern ? count + 1 : count;
}
