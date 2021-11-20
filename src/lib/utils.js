export function currencyFormat(num, currency) {
  return num.toLocaleString('en-US', { style: 'currency', currency, minimumFractionDigits: 2 });
}

export function cryptoValueFormat(num, currency) {
  return num.toLocaleString('en-US', { style: 'currency', currency, minimumFractionDigits: 2, maximumFractionDigits: 12 });
}

export function cryptoFormat(num, currency) {
  return num.toLocaleString('en-US', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 12 }) + ' ' + currency;
}