/**
 * @author lorien
 */

//if the namespace hasn't been defined then define it now
if (!magical_store) magical_store = {};
            
magical_store.ShoppingCart = function(cartDiv) {
    
    this.items = new Array();
    this.totalCost = 0;
    
    this.addItem = function(item) {
//TODO: add ability to add more than one of an item
        //add the item to the array
        this.items.push(item);
        this.totalCost += item.price;
        
        var itemView = new magical_store.MagicalItemView(cartDiv, item);
        itemView.inCart = true;
        itemView.draw();
        
        //update the price
        window.document.getElementById('cart_dollars').innerHTML = this.totalCost;
    }
    
    this.getTotalCost = function() {
        
        return this.totalCost;
    }
}