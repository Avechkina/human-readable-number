const arrOfNumb = ['zero','one','two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen' , 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty']
arrOfNumb[30] = 'thirty';
arrOfNumb[40] = 'forty';
arrOfNumb[50] = 'fifty';
arrOfNumb[60] = 'sixty';
arrOfNumb[70] = 'seventy';
arrOfNumb[80] = 'eighty';
arrOfNumb[90] = 'ninety';
arrOfNumb[100] = 'hundred';
console.log(arrOfNumb);
module.exports = function toReadable (number) {

    let str = '';
    if (number > 99) {
      str = arrOfNumb[parseInt(number/100)] + ' hundred';
    }
    if (number%100 === 0) {
      if (number === 0) str = arrOfNumb[number];
      return str;}
    if (number%100 < 21)  {
      str += ' ' + arrOfNumb[number%100];
   } 
   else if (number%10 === 0) {
       str += ' ' + arrOfNumb[number%100];

   }
   else {
    str +=  ' '  + arrOfNumb[number%100-number%10] + ' ' + arrOfNumb[number%10];
   }

   if (number === 0) str = arrOfNumb[number];

    return str.trim();
}
