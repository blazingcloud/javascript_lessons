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
        
        beforeEach(function() {
            magicalItem.mana = 50;
        });
        
        it('should become a puff of smoke if its manna goes negative', function() {
            magicalItem.damage(100);
            expect(magicalItem.isPuffOfSmoke).toEqual(true);
        });
        
        it('should become a puff of smoke if its manna is 0', function() {
            magicalItem.damage(magicalItem.mana);
            expect(magicalItem.isPuffOfSmoke).toEqual(true);
        });
        
        it('should NOT become a puff of smoke after damage if manna is greater than 0', function() {
            magicalItem.damage(magicalItem.mana - 1);
            expect(magicalItem.isPuffOfSmoke).toEqual(false);
        });
        
        it('mana should be decremented after damage', function() {
            var mana = magicalItem.mana;
            magicalItem.damage(5);
            expect(magicalItem.mana).toEqual(mana - 5);
        });
        
        describe('Regeneration after being puff of smoke', function () {
            
            it('should not be a puff of smoke after regeneration', function() {
                magicalItem.damage(100);
                magicalItem.regenerate(1);
                expect(magicalItem.isPuffOfSmoke).toEqual(false);
            });
            
            it('should set mana to the regeneration value', function() {
                magicalItem.damage(100);
                magicalItem.regenerate(1);
                expect(magicalItem.mana).toEqual(1);
            });
            
        });
        
        describe('Regeneration after NOT being puff of smoke', function () {
        });
        
        
    });
});