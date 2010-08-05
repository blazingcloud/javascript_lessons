function MagicalItem() {
                
    this.price = 0;
    this.name = '';
    this.description = '';
    this.hitPoints = 0;
    this.mana = 0;
    this.kilos = 0;
    this.isPuffOfSmoke = false;
}

MagicalItem.prototype.damage = function(numManaPoints) {
    this.mana -= numManaPoints;
                
    if (this.mana <= 0) this.isPuffOfSmoke = true; 
}

MagicalItem.prototype.regenerate = function(numManaPoints) {
        
    if (this.isPuffOfSmoke) {
        this.mana = numManaPoints;
        this.isPuffOfSmoke = false;
    } else {
        this.mana += numManaPoints;
    }
}

var myItem = new MagicalItem();
myItem.price = 10;
myItem.name = 'Magic Hat';
