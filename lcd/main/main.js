function printLcdDigits(characters) {
    var digits = characters.split('');

    var grids = loadAllDigitsGrids();
    var lattices = buildLattices(digits,grids);

    var lcdDigit = buildLcdDigit(lattices);

    console.log(lcdDigit);
}

function getGridForDigit(digit,grids) {
    for(var i = 0;i < grids.length;i++){
        if(grids[i].value === parseInt(digit)){

            return grids[i];
        }
    }
}

function buildLattices(digits,grids) {
    var lattices = [];

    digits.forEach(function (digit) {
        var girdForDigit = getGridForDigit(digit,grids);

        lattices.push(girdForDigit);
    });

    return lattices;
}

function buildLcdDigit(lattices) {

    var lcdDigit = '';
    var firstText = '';
    var secondText = '';
    var thirdText = '';

    lattices.forEach(function (lattice) {
        firstText += lattice.pattern.firstLine + ' ';
        secondText += lattice.pattern.secondLine + ' ';
        thirdText += lattice.pattern.thirdLine + ' ';
    });
    lcdDigit += firstText + '\n' + secondText  + '\n' + thirdText;

    return lcdDigit;
}

function loadAllDigitsGrids() {
    return [
        {value:0,pattern:{firstLine:'._.',secondLine:'|.|',thirdLine:'|_|'}},
        {value:1,pattern:{firstLine:'...',secondLine:'..|',thirdLine:'..|'}},
        {value:2,pattern:{firstLine:'._.',secondLine:'._|',thirdLine:'|_.'}},
        {value:3,pattern:{firstLine:'._.',secondLine:'._|',thirdLine:'._|'}},
        {value:4,pattern:{firstLine:'...',secondLine:'|_|',thirdLine:'..|'}},
        {value:5,pattern:{firstLine:'._.',secondLine:'|_.',thirdLine:'._|'}},
        {value:6,pattern:{firstLine:'._.',secondLine:'|_.',thirdLine:'|_|'}},
        {value:7,pattern:{firstLine:'._.',secondLine:'..|',thirdLine:'..|'}},
        {value:8,pattern:{firstLine:'._.',secondLine:'|_|',thirdLine:'|_|'}},
        {value:9,pattern:{firstLine:'._.',secondLine:'|_|',thirdLine:'..|'}}
    ];
}

module.exports = {getGridForDigit:getGridForDigit,
                  buildLattices:buildLattices,
                  buildLcdDigit:buildLcdDigit,
                  printLcdDigits:printLcdDigits};
