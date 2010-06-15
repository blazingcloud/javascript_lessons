/**
 * @author lorien234
 */

 function MagicalItemView(containerNode, itemModel) {
     
     //the containing node (div) to which this magical item view should be added
     this.containerNode = containerNode;
     this.item = itemModel;
     
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
     }
 }
