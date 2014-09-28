// reverseComplement :: String -> String
function reverseComplement(dna) {
    return dna.split('').map(complement).reverse().join('');
}

// complement :: String -> String
function complement(nucleotide) {
    var complements = {
        'A' : 'T',
        'C' : 'G',
        'G' : 'C',
        'T' : 'A'
    };

    return complements[nucleotide];
}
