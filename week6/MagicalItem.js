//if the namespace hasn't been defined then define it now
if (!magical_store) magical_store = {};

//for a scalable solution use prototype for you method defintiions
magical_store.MagicalItem = function(dataHash) {
    
    this.initWithData(dataHash);
    
    this.isPuffOfSmoke = false;
    
}

magical_store.MagicalItem.prototype.initWithData = function(dataHash) {
    this.price = dataHash.price;
    this.name = dataHash.name;
    this.description = dataHash.description;
    this.hitPoints = dataHash.hitPoints;
    this.mana = dataHash.mana;
    this.kilos = dataHash.kilos;
}
    
    
magical_store.MagicalItem.prototype.damage = function(numManaPoints) {
    this.mana -= numManaPoints;
                
    if (this.mana <= 0) this.isPuffOfSmoke = true; 
}

magical_store.MagicalItem.prototype.regenerate = function(numManaPoints) {
    
    if (this.isPuffOfSmoke) {
        this.mana = numManaPoints;
        this.isPuffOfSmoke = false;
    } else {
        this.mana += numManaPoints;
    }
    
}         
