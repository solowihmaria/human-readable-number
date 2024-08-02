module.exports = function toReadable (number) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number === 0) {
        return 'zero';
    }

    let readableString = '';

    if (number >= 100) {
        readableString += units[Math.floor(number / 100)] + ' hundred';
        number %= 100;
    }

    if (number >= 20) {
        if (readableString !== '') readableString += ' ';
        readableString += dozens[Math.floor(number / 10)];
        number %= 10;
    } else if (number >= 10) {
        if (readableString !== '') readableString += ' ';
        readableString += teens[number - 10];
        number = 0;
    }

    if (number > 0) {
        if (readableString !== '') readableString += ' ';
        readableString += units[number];
    }

    return readableString;
    }
    
