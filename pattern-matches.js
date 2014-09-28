
// patternMatches :: String, String -> [Number]
function patternMatches(text, pattern) {
    return text.split('').reduce(patternStartIndexes(pattern), []);
}

// patternStartIndexes :: String -> ([Number], String, Number, [String] -> [Number])
function patternStartIndexes(pattern) {
    return function (is, _, i, a) {
        if (a.slice(i, i + pattern.length).join('') === pattern) is.push(i);
        return is;
    };
}
