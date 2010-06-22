/**
 * @author lorien234
 */

            
function ShoppingCart() {
    
    this.items = new Array();
    this.totalCost = 0;
    
    this.addItem = function(item, quantity) {
//TODO: add ability to add more than one of an item
        //add the item to the array
        this.items.push(item);
        this.totalCost += item.price;
    }
    
    this.getTotalCost = function() {
        
        return this.totalCost;
    }
}