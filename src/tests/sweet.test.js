const Sweet = require('../models/Sweet');

test('should create a Sweet with correct properties', () => {
  const sweet = new Sweet(1001, 'Kaju Katli', 'Nut-Based', 50, 20);
  expect(sweet.id).toBe(1001);
  expect(sweet.name).toBe('Kaju Katli');
  expect(sweet.category).toBe('Nut-Based');
  expect(sweet.price).toBe(50);
  expect(sweet.quantity).toBe(20);
});