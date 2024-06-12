function generateAscii() {
    const text = document.getElementById('textInput').value;
    const asciiArt = generateArt(text);
    document.getElementById('asciiArt').textContent = asciiArt;
}

function generateArt(word) {
    const asciiArt = [];

    // Define ASCII art patterns for each character
    const characters = {
        'A': ['  AA  ', ' A  A ', 'AAAAAA', 'A    A', 'A    A'],
        'B': ['BBBBB ', 'B    B', 'BBBBB ', 'B    B', 'BBBBB '],
        'C': [' CCCC ', 'C    C', 'C    ', 'C    C', ' CCCC '],
        'D': ['DDDD  ', 'D   D ', 'D    D', 'D   D ', 'DDDD  '],
        'E': ['EEEEE ', 'E    ', 'EEEEE ', 'E    ', 'EEEEE '],
        'F': ['FFFFF ', 'F    ', 'FFFFF ', 'F    ', 'F    '],
        'G': [' GGGG ', 'G    G', 'G  GG ', 'G    G', ' GGGG '],
        'H': ['H    H', 'H    H', 'HHHHHH', 'H    H', 'H    H'],
        'I': ['IIIII', '  I  ', '  I  ', '  I  ', 'IIIII'],
        'J': ['JJJJJ', '   J ', '   J ', 'J  J ', ' JJ  '],
        'K': ['K   K', 'K  K ', 'KKK  ', 'K  K ', 'K   K'],
        'L': ['L    ', 'L    ', 'L    ', 'L    ', 'LLLLL'],
        'M': ['M    M', 'MM  MM', 'M MM M', 'M    M', 'M    M'],
        'N': ['N    N', 'NN   N', 'N N  N', 'N  N N', 'N   NN'],
        'O': [' OOOO ', 'O    O', 'O    O', 'O    O', ' OOOO '],
        'P': ['PPPPP ', 'P    P', 'PPPPP ', 'P     ', 'P     '],
        'Q': [' QQQQ ', 'Q    Q', 'Q Q QQ', 'Q   QQ', ' QQQQQ'],
        'R': ['RRRRR ', 'R    R', 'RRRRR ', 'R   R ', 'R    R'],
        'S': [' SSSS ', 'S    S', ' SSSS ', '    S ', 'SSSS  '],
        'T': ['TTTTT', '  T  ', '  T  ', '  T  ', '  T  '],
        'U': ['U    U', 'U    U', 'U    U', 'U    U', ' UUUU '],
        'V': ['V    V', 'V    V', ' V  V ', ' V  V ', '  VV  '],
        'W': ['W    W', 'W    W', 'W WW W', 'WW  WW', 'W    W'],
        'X': ['X   X', ' X X ', '  X  ', ' X X ', 'X   X'],
        'Y': ['Y   Y', ' Y Y ', '  Y  ', '  Y  ', '  Y  '],
        'Z': ['ZZZZZ', '   Z ', '  Z  ', ' Z   ', 'ZZZZZ'],
        // Add more characters as needed
    };

    // Convert word to uppercase
    word = word.toUpperCase();

    // Generate ASCII art for each character in the word
    for (let row = 0; row < 5; row++) {
        let asciiRow = '';
        for (let i = 0; i < word.length; i++) {
            const char = characters[word[i]];
            if (char) {
                asciiRow += char[row] + '  ';
            } else {
                asciiRow += '     ';
            }
        }
        asciiArt.push(asciiRow);
    }

    // Combine ASCII art rows into a single string
    return asciiArt.join('\n');
}
