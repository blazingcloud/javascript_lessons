/**
 * @author lorien234
 */

            
function ShoppingCart(cartDiv) {
    
    this.items = new Array();
    this.totalCost = 0;
    
    this.addItem = function(item) {
//TODO: add ability to add more than one of an item
        //add the item to the array
        this.items.push(item);
        this.totalCost += item.price;
        
        var itemView = new MagicalItemView(cartDiv, item);
        itemView.inCart = true;
        itemView.draw();
    }
    
    this.getTotalCost = function() {
        
        return this.totalCost;
    }
}