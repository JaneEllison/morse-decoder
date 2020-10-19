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

function getLetterFromMorse(code) {
  if ((code === "**********")) {
    return " ";
  }

  for (let i=0; i<code.length; i++){
    if (code[i] === '0' && code[i+1] === '1') {
      code=code.slice(i+1);
    } break;
  }

  let result = '';
  for (let i=0; i<code.length; i+=2) {
    if (code[i] + code[i+1] === '10') {
      result +='.';
    } else if (code[i] + code[i+1] === '11') {
      result +='-';
    }
  }

  let value = MORSE_TABLE[result];
  return value;
}


function decode(expr) {
  let result = '';
  for (let i=10; i<expr.length+1; i+=10) {
    let value = getLetterFromMorse (expr.slice(i-10, i));
    result += value;
  }
  return result;
}



module.exports = {
    decode
}