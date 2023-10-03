function formatPrice(value, currency) {
  value = Number(value);
  currency = currency || '$';
  if (Number.isNaN(value) || typeof currency != 'string') {
    return null;
  }
  return currency + value.toFixed(2);
}
console.log(formatPrice(1.99, 32));
console.log(formatPrice(5, '^'));
console.log(formatPrice(9.9));
console.log(formatPrice('Ted'));
console.log(formatPrice('Ted', '&'));
