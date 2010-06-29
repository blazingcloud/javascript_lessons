/**
 * @author lorien234
 */

describe('ShoppingCart model', function () {
    
    var shoppingCart, item1, item2, item3;
    
    beforeEach(function() {
        
        shoppingCart = new ShoppingCart();
        
        item1 = new MagicalItem();
        item1.name = "Item 1";
        item1.price = 10;
        
        item2 = new MagicalItem();
        item2.name = "Item 2";
        item3 = new MagicalItem();
        item3.name = "Item 3";
    });
    
    it('should have default values for carts', function() {      
        expect(shoppingCart.totalCost).toEqual(0);
        expect(shoppingCart.items.length).toEqual(0);
    });
    
    describe('ShoppingCart model', function () {
        
        it('should have 1 item in the cart when an item is added', function() {      
            
            shoppingCart.addItem(item1, 1);
            expect(shoppingCart.items.length).toEqual(1);  
        });
        
        it('should have 2 items in the cart when two items are added', function() {      
            
            shoppingCart.addItem(item1, 1);
            shoppingCart.addItem(item2, 1);
            expect(shoppingCart.items.length).toEqual(2);  
        });
        
        it('should calculate the total price when an item is added', function() {      
            
            shoppingCart.addItem(item1, 1);
            expect(shoppingCart.getTotalCost()).toEqual(10);  
        });
        
        
        
    });
    
});