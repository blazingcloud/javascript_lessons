function MagicalItem() {
                
    this.price = 0;
    this.name = '';
    this.description = '';
    this.hitPoints = 0;
    this.mana = 0;
    this.kilos = 0;
    this.isPuffOfSmoke = false;
    
    this.damage = function(numManaPoints) {
        this.mana -= numManaPoints;
                    
        if (this.mana <= 0) this.isPuffOfSmoke = true; 
    }
    
    this.regenerate = function(numManaPoints) {
        
        if (this.isPuffOfSmoke) {
            this.mana = numManaPoints;
            this.isPuffOfSmoke = false;
        } else {
            this.mana += numManaPoints;
        }
        
//                    this.mana += numManaPoints;
//                    this.isPuffOfSmoke = false;
    }
}