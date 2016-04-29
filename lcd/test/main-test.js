var test = require('../main/main.js');

describe('getGridForDigit()', function () {
    var grids;
    var digit;

    beforeEach(function () {
        grids = [
            {value:0,pattern:{firstLine:'._.',secondLine:'|.|',thirdLine:'|_|'}},
            {value:2,pattern:{firstLine:'._.',secondLine:'._|',thirdLine:'|_.'}}
        ];
        digit = '2';
    });

    it('it can return correct grid for each digit', function () {
        var gridForDigit = test.getGridForDigit(digit,grids);

        expect(gridForDigit).toEqual({value:2,
            pattern:{firstLine:'._.',secondLine:'._|',thirdLine:'|_.'}}
        );
    });
});

describe('buildLattices()', function () {
    var digits;
    var grids;

    describe('if digits has only one element', function () {
        beforeEach(function () {
            digits = ['2'];
            grids = [
                {value:0,pattern:{firstLine:'._.',secondLine:'|.|',thirdLine:'|_|'}},
                {value:2,pattern:{firstLine:'._.',secondLine:'._|',thirdLine:'|_.'}}
            ];
        });

        it('it will return an objectArray which has one element', function () {
            var lattices = test.buildLattices(digits,grids);
            var expectResult = [
                {value:2,pattern:{firstLine:'._.',secondLine:'._|',thirdLine:'|_.'}}
            ];

            expect(lattices).toEqual(expectResult);
        });
    });

    describe('if digits has more than one element', function () {
        beforeEach(function () {
            digits = ['9','1','0'];
            grids = [
                {value:0,pattern:{firstLine:'._.',secondLine:'|.|',thirdLine:'|_|'}},
                {value:1,pattern:{firstLine:'...',secondLine:'..|',thirdLine:'..|'}},
                {value:2,pattern:{firstLine:'._.',secondLine:'._|',thirdLine:'|_.'}},
                {value:9,pattern:{firstLine:'._.',secondLine:'|_|',thirdLine:'..|'}}
            ];
        });

        it('it will return an objectArray which has correct amount', function () {
            var lattices = test.buildLattices(digits,grids);
            var expectResult = [
                {value:9,pattern:{firstLine:'._.',secondLine:'|_|',thirdLine:'..|'}},
                {value:1,pattern:{firstLine:'...',secondLine:'..|',thirdLine:'..|'}},
                {value:0,pattern:{firstLine:'._.',secondLine:'|.|',thirdLine:'|_|'}}
            ];

            expect(lattices).toEqual(expectResult);
        });
    });
});

describe('buildLcdDigit()', function () {
    var lattices;

    beforeEach(function () {
        lattices = [
            {value:9,pattern:{firstLine:'._.',secondLine:'|_|',thirdLine:'..|'}},
            {value:1,pattern:{firstLine:'...',secondLine:'..|',thirdLine:'..|'}},
            {value:0,pattern:{firstLine:'._.',secondLine:'|.|',thirdLine:'|_|'}}
        ];
    });

    it('it can return correct text', function () {
        var lcdDigit = test.buildLcdDigit(lattices);
        var expectResult = '._. ... ._. ' + '\n'
            + '|_| ..| |.| ' + '\n'
            + '..| ..| |_| ';

        expect(lcdDigit).toEqual(expectResult);
    });
});

describe('printLcdDigits()', function () {
    var characters;

    beforeEach(function () {
        characters = '910';
    });
    it('it should print correct text', function () {
        spyOn(console, 'log');
        test.printLcdDigits(characters);
        var expectResult = '._. ... ._. ' + '\n'
            + '|_| ..| |.| ' + '\n'
            + '..| ..| |_| ';
        expect(console.log).toHaveBeenCalledWith(expectResult);

    });
});
