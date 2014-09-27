// frequentWords :: String, Number -> [String]
function frequentWords(text, wordLen) {
    var counts   = text.split('').reduce(countWords.bind(null, wordLen), Object.create(null)),
        countArr = Object.keys(counts).map(wordCountArr.bind(null, counts)).sort(byCountDesc),
        mostFreq = [];

    while (countArr.length > 0 && (mostFreq.length === 0 || countArr[0].count === mostFreq[0].count)) mostFreq.push(countArr.shift());
    return mostFreq.map(word);
}

// byCountDesc :: { word :: String, count :: Number }, { word :: String, count :: Number } -> Number
function byCountDesc(a, b) {
    return b.count - a.count;
}

// countKPatterns :: Number, { * :: Number }, String, Number, [String] -> { * :: Number }
function countWords(len, counts, c, i, a) {
    var word = a.slice(i, i + len).join('');
    if (word.length === len) counts[word] = counts[word] ? counts[word] + 1 : 1;
    return counts;
}

// word :: { word :: String, count :: Number } -> String
function word(c) {
    return c.word;
}

// wordCountArr :: { * :: Number }, String -> { word :: String, count :: Number }
function wordCountArr(counts, word) {
    return { word : word, count : counts[word] };
}
