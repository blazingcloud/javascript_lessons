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
            magicalItem.damage(50);
            expect(magicalItem.mana).toEqual(0);
            expect(magicalItem.isPuffOfSmoke).toEqual(true);
        });
        
        it('should NOT become a puff of smoke if manna is greater than 0', function() {
            magicalItem.damage(5);
            expect(magicalItem.isPuffOfSmoke).toEqual(false);
        });
        
        describe('Regeneration after being puff of smoke', function () {
        
            beforeEach(function() {
                magicalItem.damage(100);
            });
            
            it('should NOT be a puff of smoke after regenerating', function(){
                magicalItem.regenerate(10);
                expect(magicalItem.isPuffOfSmoke).toEqual(false);
            });
            
            it('should have 10 mana after regenerating 10 points', function(){
                magicalItem.regenerate(10);
                expect(magicalItem.mana).toEqual(10);
            });
        });
        
        describe('Regeneration after NOT being puff of smoke', function () {
            
            it('should NOT be a puff of smoke after regenerating', function(){
                magicalItem.regenerate(10);
                expect(magicalItem.isPuffOfSmoke).toEqual(false);
            });
            
            it('should have 60 mana after regenerating 10 points', function(){
                magicalItem.regenerate(10);
                expect(magicalItem.mana).toEqual(60);
            });
        });
        
        
    });
});