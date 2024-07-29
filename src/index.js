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
    if (number < 20) {
       str = arrOfNumb[number];
    } else if (number.length === 2) {
        str = arrOfNumb[parseInt(number/10)] + ' ' + arrOfNumb[number%10];

    }
    else if (number.length === 3) {
        str = arrOfNumb[parseInt(number/100)] + ' ' + arrOfNumb[parseInt(number/10)] + ' ' + arrOfNumb[number%10];

    }
    return str;
}
