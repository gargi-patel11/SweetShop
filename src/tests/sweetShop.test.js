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

    // expect(shop.viewSweets()).toContainEqual(sweet);
  });

  test("should delete a sweet by ID", () => {
    const sweet = new Sweet(1001, "Kaju Katli", "Nut-Based", 50, 20);
    shop.addSweet(sweet);

    shop.deleteSweet(1001);

    expect(shop.viewSweets()).not.toContainEqual(sweet);
  });

  
});
