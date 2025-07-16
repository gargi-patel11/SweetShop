const Sweet = require("../models/Sweet") ;
const Shop = require("../models/sweetShop") ; 

describe("SweetShop class" , ()=>{
    let shop  ; 
    shop = new Shop() ; 

    test('should add a Sweet ', () => {
        const sweet = new Sweet(1001, 'Kaju Katli', 'Nut-Based', 50, 20);
        shop.addSweet(sweet);

        expect(shop.viewSweets()).toContainEqual(sweet);
    })
    
})