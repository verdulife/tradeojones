export function roundWithTwoDecimals(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

export function numerationFormat(num, year) {
  const length = `${num}`.length;
  const prefix = year.toString().slice(-2);

  if (length === 1) return `${prefix}-0000${num}`;
  if (length === 2) return `${prefix}-000${num}`;
  if (length === 3) return `${prefix}-00${num}`;
  if (length === 4) return `${prefix}-0${num}`;
  return `${prefix}-${num}`;
}

export function currencyFormat(num, currency) {
  return num.toLocaleString('en-US', { style: 'currency', currency });
}