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

const DASH = "11"
const DOT = "10"

function decode(expr) {
    let padding = expr.length % 10
    if (padding) 
        expr = "0".repeat(padding) + expr
    let result = ""
    expr.match(/.{1,10}/g).forEach(s => {
        if (s.includes("*")) {
            return result += " "
        }
        const trim = s.slice(s.indexOf("1"), s.length)
        const morzed = trim.match(/.{1,2}/g).map(t => t === DASH ? "-" : ".").join("")
        result += MORSE_TABLE[morzed]
    })
    return result
}

module.exports = {
    decode
}