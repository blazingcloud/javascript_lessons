function ShoppingCart() {
                
    this.items = new Array();
    
    //TODO: make this private, add a getter
    //this.totalCost = 0;
}

ShoppingCart.prototype.addItem = function(item) {
    this.items.push(item);
}

ShoppingCart.prototype.getTotalCost = function() {
    
    var total = 0;
    for (var i=0; i<this.items.length; i++) {
        total += this.items[i].price;
    }
    return total;
}