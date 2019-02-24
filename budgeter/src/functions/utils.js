//Takes in a number and converts it to a roman numeral and returns it as positive or negative
export const romanMaker = (number, state) => {
  if(state) {
    if(number < 0){
      number *= -1
      let numerals = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}, roman = '', i;
      for ( i in numerals ) {
        while ( number >= numerals[i] ) {
          roman += i;
          number -= numerals[i];
        }
      }
    return ("-" + roman);
  } else {
    let numerals = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}, roman = '', i;
    for ( i in numerals ) {
      while ( number >= numerals[i] ) {
        roman += i;
        number -= numerals[i];
      }
    }
    return roman;
    }
  } else {
    return number
  }
}

//Adds the old and new balance together for the newBalance
export const createNewBalance = (b, a) => {
  return parseFloat(b) + parseFloat(a)
};
