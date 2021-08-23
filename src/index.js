const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let resStr = '';
    let map = new Map(Object.entries(MORSE_TABLE));
    for (let i = 0; i < (expr.length / 10); i++) {
        let str = (expr.slice(i * 10, (i + 1) * 10));
        if (str === '**********') {
            resStr += ' ';
        } else {
            let msg = '';
            for (let j = 0; j < (str.length / 2); j++) {
                switch (str[j * 2] + str[j * 2 + 1]) {
                    case '10' :
                        msg += '.';
                        break;
                    case '11' :
                        msg += '-';
                        break;
                    }
            }
            resStr += map.get(msg);
        } 
    }
    return resStr;    
}

module.exports = {
    decode
}