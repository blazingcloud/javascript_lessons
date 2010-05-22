describe('MagicalItem model', function () {
    
    var magicalItem;
    
    beforeEach(function() {
        magicalItem = new MagicalItem();
    });


    it('should have default values for members', function() {
        expect(magicalItem.price).toEqual(0);
        expect(magicalItem.name).toEqual('');
        expect(magicalItem.description).toEqual('');
        expect(magicalItem.hitPoints).toEqual(0);
        expect(magicalItem.mana).toEqual(0);
        expect(magicalItem.kilos).toEqual(0);
        expect(magicalItem.isPuffOfSmoke).toEqual(false);
        
        //etc...
    });

    describe('Mana', function () {
        
        it('should become a puff of smoke if its manna goes negative', function() {
            magicalItem.damage(100);
            expect(magicalItem.isPuffOfSmoke).toEqual(true);
            
            //etc...
        });
    });
});