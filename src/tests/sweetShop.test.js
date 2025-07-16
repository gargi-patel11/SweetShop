const Sweet = require("../models/Sweet") ;
const SweetShop = require("../models/sweetShop") ; 

describe("SweetShop class" , ()=>{
    let shop  ; 
    shop = new SweetShop() ; 

    test('should add a Sweet ', () => {
        const sweet = new Sweet(1001, 'Kaju Katli', 'Nut-Based', 50, 20);
        shop.addSweet(sweet);

        expect(shop.viewSweets()).toContainEqual(sweet);
    })
    
})