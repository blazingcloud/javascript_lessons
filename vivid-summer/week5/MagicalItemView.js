/**
 * @author lorien234
 */

 function MagicalItemView(containerNode, itemModel) {
     
     //the containing node (div) to which this magical item view should be added
     this.containerNode = containerNode;
     this.item = itemModel;
     this.inCart = false;
     
     this.addToCart = function() {
         shoppingCart.addItem(this.item);
     }
     
     this.removeFromCart = function() {
         alert('removing from cart');
     }
     
     this.draw = function() {
         
         //create my DOM nodes and add them to the container
                
        var itemDiv = document.createElement('div');
        itemDiv.className = 'catalogItem';
        this.containerNode.appendChild(itemDiv);
        
        var nameDiv = document.createElement('div');
        nameDiv.className = 'catalogItemName';
        nameDiv.innerHTML = this.item.name;
        itemDiv.appendChild(nameDiv);
        
        var descriptionDiv = document.createElement('div');
        descriptionDiv.className = 'catalogItemDescription';
        descriptionDiv.innerHTML = this.item.description;
        itemDiv.appendChild(descriptionDiv);
        
        var priceDiv = document.createElement('div');
        priceDiv.className = 'catalogItemPrice';
        itemDiv.appendChild(priceDiv);
        var priceLabel = document.createTextNode("Price: $");
        priceDiv.appendChild(priceLabel);
        var priceValue = document.createTextNode(this.item.price);
        priceDiv.appendChild(priceValue);
        
        var cartButton = document.createElement('button');
        
        if (this.inCart) {
            cartButton.innerHTML = "Remove from cart";
            var me = this;
            cartButton.onclick = function() {
                me.removeFromCart();
            }
        } else {
            cartButton.innerHTML = "Add to cart";
            var me = this;
            cartButton.onclick = function() {
                me.addToCart();
            }
        }
        cartButton.style.marginTop = '3px';
        itemDiv.appendChild(cartButton);
     }
 }
