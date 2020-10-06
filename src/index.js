module.exports = function toReadable (number) {
    if (number == 0) { return 'zero'; }
    var tmp;
    var hundreds = Math.floor(number/100);
    var remainder = number % 100;
    if (remainder < 20 && remainder > 10) {
        tmp = [convertHundreds(hundreds), convertTenNineteenRemainder(remainder)]; 
    } else {
        var tens = Math.floor(remainder / 10);
        var ones = Math.floor((number - (hundreds * 100)) - (tens * 10));
        tmp = [convertHundreds(hundreds), convertTens(tens), convertOnes(ones)];
    }
    return tmp.filter(function(element) {
        return element != null && element != '';
    }).join(' ').trimEnd();
};

function convertOnes(num) {
    switch(num) {
        case 1: 
            return 'one';
        case 2: 
            return 'two';
        case 3: 
            return 'three';
        case 4: 
            return 'four';
        case 5: 
            return 'five';
        case 6: 
            return 'six';
        case 7: 
            return 'seven';
        case 8: 
            return 'eight';
        case 9: 
            return 'nine';
        default: {
            return '';
        }
    }
}

function convertTens (num) {
    switch(num) {
        case 1: 
            return 'ten';
        case 2: 
            return 'twenty';
        case 3: 
            return 'thirty';
        case 4: 
            return 'forty';
        case 5: 
            return 'fifty';
        case 6: 
            return 'sixty';
        case 7: 
            return 'seventy';
        case 8: 
            return 'eighty';
        case 9: 
            return 'ninety';
        default: {
            return '';
        }
    }
}

function convertHundreds(num) {
    if (num == 0) {
        return '';
    }
    return [convertOnes(num), "hundred"].join(' ');
}

function convertTenNineteenRemainder(num) {
    switch(num) {
        case 11: 
            return 'eleven';
        case 12: 
            return 'twelve';
        case 13: 
            return 'thirteen';
        case 14: 
            return 'fourteen';
        case 15: 
            return 'fifteen';
        case 16: 
            return 'sixteen';
        case 17: 
            return 'seventeen';
        case 18: 
            return 'eighteen';
        case 19: 
            return 'nineteen';
        default: {
            return '';
        }
    }
}