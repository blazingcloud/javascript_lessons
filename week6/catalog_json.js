/**
 * @author lorien
 */

//if the namespace hasn't been defined then define it now
if (!magical_store) magical_store = {};

magical_store.characters = ['wizard', 'dwarf', 'hobbit'];

magical_store.characterItems = {
    wizard: ['Magic Wand', 'Funny Hat'],
    dwarf: ['Sun Glasses', 'Funny Hat'],
    hobbit: ['Sun Glasses'],
};

magical_store.magicalItems = [
    {
        name: 'Magic Wand',
        price: 25,
        description: 'Used to channel and amplify energy. Very useful in spell casting.',
        hitPoints: 100,
        mana: 100,
        kilos: .2,
    },
    
    {
        name: 'Funny Hat',
        price: 12,
        description: 'Funny hat provides an excellent disguise. You will not be recognized or remembered by anyone if you wear this hat!',
        hitPoints: 10,
        mana: 10,
        kilos: .3,
    },
    
    {
        name: 'Sun Glasses',
        price: 12,
        description: 'Not just to keep the sun from your eyes, these glasses give you x-ray vision!',
        hitPoints: 20,
        mana: 10,
        kilos: .1,
    }
]