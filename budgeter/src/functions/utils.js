//Takes in a number and converts it to a roman numeral and returns it as positive or negative
export const romanMaker = (number, state) => {
  if(state && number < 10000) {
    if(number < 0){
      // converts a negative number to a positive number
      number *= -1
      let numerals = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}, roman = '', i;
      for ( i in numerals ) {
        while ( number >= numerals[i] ) {
          roman += i;
          number -= numerals[i];
        }
      }
      //this then adds back the - at the front
    return (roman);
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

//Adds the old and new amount together for the newBalance
export const createNewBalance = (bal, amt) => {
  return parseFloat(bal) + parseFloat(amt)
};

//Takes current balance and removes the updating balance and adds the updated balance
export const updateBalance = (bal, amt, u) => {
  let oldBal = (parseFloat(bal) + parseFloat(amt))
  return (parseFloat(oldBal) + parseFloat(u))
}
