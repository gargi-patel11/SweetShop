const Sweet = require("../models/Sweet");
const SweetShop = require("../models/sweetShop");

describe("SweetShop class", () => {
  let shop;
  beforeEach(() => {
    shop = new SweetShop();
  });

  test("should add a Sweet ", () => {
    const sweet = new Sweet(1001, "Kaju Katli", "Nut-Based", 50, 20);
    shop.addSweet(sweet);

    expect(shop.viewSweets()).toContainEqual(sweet);
  });

  test("should delete a sweet by ID", () => {
    const sweet = new Sweet(1001, "Kaju Katli", "Nut-Based", 50, 20);
    shop.addSweet(sweet);

    shop.deleteSweet(1001);

    expect(shop.viewSweets()).not.toContainEqual(sweet);
  });

    test('should purchase a sweet and reduce stock', () => {
    const sweet = new Sweet(1001, 'Kaju Katli', 'Nut-Based', 50, 20);
    shop.addSweet(sweet);

    shop.purchaseSweet(1001, 5);

    expect(sweet.quantity).toBe(15);
  });

   test('should restock a sweet', () => {
    const sweet = new Sweet(1001, 'Kaju Katli', 'Nut-Based', 50, 10);
    shop.addSweet(sweet);

    shop.restockSweet(1001, 5);

    expect(sweet.quantity).toBe(15);
  });

});
