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
}

module.exports = SweetShop ;
