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
}

module.exports = SweetShop ;
