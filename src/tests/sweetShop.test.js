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

    test('should throw error when adding sweet with duplicate ID', () => {
    const sweet1 = new Sweet(1001, 'Kaju Katli', 'Nut-Based', 50, 20);
    const sweet2 = new Sweet(1001, 'Gulab Jamun', 'Milk-Based', 10, 50);

    shop.addSweet(sweet1);

    expect(() => {
      shop.addSweet(sweet2);
    }).toThrow('Sweet with this ID already exists.');
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

  test('should throw error if not enough stock', () => {
    const sweet = new Sweet(1001, 'Kaju Katli', 'Nut-Based', 50, 2);
    shop.addSweet(sweet);

    expect(() => {
      shop.purchaseSweet(1001, 5);
    }).toThrow('Not enough stock.');
  });

   test('should restock a sweet', () => {
    const sweet = new Sweet(1001, 'Kaju Katli', 'Nut-Based', 50, 10);
    shop.addSweet(sweet);

    shop.restockSweet(1001, 5);

    expect(sweet.quantity).toBe(15);
  });

  test('should search sweets by name', () => {
    const sweet1 = new Sweet(1001, 'Kaju Katli', 'Nut-Based', 50, 20);
    const sweet2 = new Sweet(1002, 'Gulab Jamun', 'Milk-Based', 10, 50);

    shop.addSweet(sweet1);
    shop.addSweet(sweet2);

    const result = shop.searchSweets({ name: 'Kaju' });
    expect(result).toContainEqual(sweet1);
    expect(result).not.toContainEqual(sweet2);
  });

});
