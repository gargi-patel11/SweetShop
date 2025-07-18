class SweetShop {
  constructor() {
    this.sweets = [];
  }
  addSweet(sweet) {
    const exists = this.sweets.find((s) => s.id === sweet.id);
    if (exists) {
      throw new Error("Sweet with this ID already exists.");
    }
    this.sweets.push(sweet);
  }

    deleteSweet(id) {
    this.sweets = this.sweets.filter(s => s.id !== id);
  }

    viewSweets() {
    return this.sweets;
  }

  purchaseSweet(id, quantity) {
    const sweet = this.sweets.find(s => s.id === id);
    if (!sweet) throw new Error('Sweet not found.');
    if (sweet.quantity < quantity) throw new Error('Not enough stock.');
    sweet.quantity -= quantity;
  }

  restockSweet(id, quantity) {
    const sweet = this.sweets.find(s => s.id === id);
    if (!sweet) throw new Error('Sweet not found.');
    sweet.quantity += quantity;
  }

   searchSweets({ name, category, minPrice, maxPrice }) {
    return this.sweets.filter(s => {
      let matches = true;
      if (name) matches = matches && s.name.includes(name);
      if (category) matches = matches && s.category === category;
      if (minPrice !== undefined) matches = matches && s.price >= minPrice;
      if (maxPrice !== undefined) matches = matches && s.price <= maxPrice;
      return matches;
    });
  }
}

 

module.exports = SweetShop ;
