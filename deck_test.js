let expect = chai.expect;

describe('MyFunctions', function() { 

    let testDeck = new Deck()
    testDeck.createDeck();

    describe('Create Deck', function() {
        
        it('should result in 52 different cards, each suit paired with each number', function() {

            const emptyBox = [];
            suits = ['H', 'D', 'S', 'C'];
            values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

            for (let suit of suits) {
                for (let value of values) {
                    emptyBox.push(new Card(suit, value));
                }
             }

            let x = testDeck.deck
            expect(x).to.eql(emptyBox);
            
        });
    });
});
