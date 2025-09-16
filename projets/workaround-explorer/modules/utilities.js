export function formatNumber(num) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);
}
console.log(formatNumber(150000)); // "$150,000.00"